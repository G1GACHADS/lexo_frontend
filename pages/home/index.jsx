import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  Text,
  ScrollView,
  View,
  Image,
  ActivityIndicator,
  SafeAreaView,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import styled from "styled-components/native";

import * as ImagePicker from "expo-image-picker";

import { captureRef } from "react-native-view-shot";

import ResizableDraggableView from "../../components/camera-center";

import { useWindowDimensions } from "react-native";

import { WebView } from 'react-native-webview';


import Api from "../../api";

//svg components
import Icon_Media from "../../components/icons/icon-media";
import Icon_Snapshot from "../../components/icons/icon-snap";
import Icon_Flash from "../../components/icons/icon-flash";
import Icon_Retake from "../../components/icons/icon-retake";
import Icon_Done from "../../components/icons/icon-done";

import { optimal_ratio } from "./methods";

import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

import { ImageEditor } from "expo-image-editor";

function LoadingView() {
  return (
    <View>
      <Text>No access to camera</Text>
    </View>
  );
}

export default function Homepage({ route, navigation }) {
  //expo camera
  const [image, setImage] = useState(null);
  const [type, setType] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [mediaPermission, setMediaPermission] = useState(null);
  const [ratio,setRatio] = useState(null);
  const [flashMode, setFlashMode] = useState(null);
  const cameraRef = useRef(null);
  const [editorVisible, setEditorVisible] = useState(false);
  const [loading,setLoading] = useState(false);
  const { height:screenHeight, width:screenWidth } = useWindowDimensions();

  const toggleCameraType = () =>
    setType((current) =>
      current === CameraType.back ? CameraType.front : CameraType.back
    );

  const toggleFlash = () =>
    setFlashMode((current) => (current === "torch" ? "off" : "torch"));

  const checkCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermissionsAsync();
    setCameraPermission(permission.status === "granted");
  }, [cameraPermission]);

  const checkMediaPermission = useCallback(async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
    setMediaPermission(permission.status === "granted");
  }, [mediaPermission]);

  const cameraRatio = useCallback(async () => {
    try{
      const ratios = await cameraRef.current.getSupportedRatiosAsync();
      let choose_ratio = await optimal_ratio(ratios);
      setRatio(choose_ratio);
    }
    catch(e){
      console.log(e);
    }
  }, [ratio]);

  const initialCameraSetup = () => {
    setType(CameraType.back);
    setFlashMode("off");
    cameraRatio();
  };

  const onNavigatePress = async(result) => {
    console.log(result)
    setLoading(false)
    await navigation.navigate("Result",{result:result,previousScreen:route.name});
  };

  //take image from screenshoot
  const takePicture = async () => {
    try {
      const result = await captureRef(cameraRef.current, {
        result: "tmpfile",
        quality: 1,
        format: "jpg",
      });
      setImage(result);
      setEditorVisible(true);
    } catch (e) {
      console.log(e);
    }
  };

  const openMedia = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [16, 9],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.uri);
    }
  };
  const sendFetch = useCallback(async (imgURI) => {
    const data = new FormData();
    data.append("image", {
      uri: imgURI,
      type: "image/jpeg",
      name: "image.jpg",
    });
    data.append("fixation", 1);
    data.append("saccade", 10);
    await Api.post("bionic", data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
      .then((response) => {
        onNavigatePress(response.data["html"]);
      })
      .catch(err=>{
        console.log(err);

      });
  }, [image]);


  useEffect(() => {
    (async function () {
      setImage(null)
      //3x initial render karena ada 3 setup
      checkCameraPermission();
      checkMediaPermission();
      initialCameraSetup();
    })();

  }, []);

  if (cameraPermission === false ) {
    return <LoadingView />;
  }
  if (loading){
    return (
      <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }
  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      {image ? (
        <ViewFullScreen>
          <ImageEditor
            visible={editorVisible}
            imageUri={ image }
            style={{ width:screenWidth,height:screenHeight}}
            onEditingComplete={async(result) => {
              setLoading(true)
              sendFetch(result.uri);
            }}
            onCloseEditor={() => {setImage(null);setEditorVisible(false);}}
            fixedCropAspectRatio={Number(ratio.split(":")[0])/Number(ratio.split(":")[1])}
            minimumCropDimensions={{
              width: 5,
              height: 5,
            }}
            mode="crop-only"
          />
          {/* <View style={{ flexDirection:'row' }}>
            <Icon_Retake text={"Retake"} onPress={()=>setImage(null)}/>
            <Icon_Done  text={"Done"} onPress={()=>sendData()}/>
          </View> */}
        </ViewFullScreen>
      ) : (
          <Camera
            style={{ flex: 1,width:screenWidth,height:screenHeight}}
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            ratio={ratio}
            onCameraReady={()=>initialCameraSetup()}
          >
            <AlignHorizontally>
              <Icon_Media style={{color:'white'}} onPress={() => openMedia()}/>
              <Icon_Snapshot style={{color:'white'}} onPress={() => takePicture()}/>
              <Icon_Flash style={{color:'white'}} onPress={() => toggleFlash()} on={flashMode==="torch"} />
            </AlignHorizontally>
          </Camera>
      )}
    </SafeAreaView>
  );
}
const ViewFullScreen = styled.View`
  flex: 1;
`;
const AlignHorizontally = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 40px;
  width: 100%;
`;

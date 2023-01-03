import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  Text,
  TouchableOpacity,
  ScrollView,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import styled from "styled-components/native";

import * as MediaLibrary from "expo-media-library";

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

import { manipulateAsync, FlipType, SaveFormat } from "expo-image-manipulator";

import Loading from "../../components/loading";
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
  const [content,setContent] = useState(null)
  const [flashMode, setFlashMode] = useState(null);
  const cameraRef = useRef(null);
  const cropRef = useRef(null);
  const album_name = "lexo";

  const { height, width } = useWindowDimensions();
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
    const permission = await Camera.requestCameraPermissionsAsync();
    setMediaPermission(permission.status === "granted");
  }, [mediaPermission]);

  const initialCameraSetup = () => {
    setType(CameraType.back);
    setFlashMode("off");
  };

  const onNavigatePress = (result) => {
    navigation.navigate("Result",{result:result});
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
  const sendFetch = useCallback(async () => {
    const data = new FormData();
    data.append("image", {
      uri: image,
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
        console.log(response.data["html"]);
        return response.data["html"];
      })
      .catch(e=>{
        console.log(err);

      });
  }, [image]);

  const sendData = useCallback(async () => {
    try {
      let result_fetch = sendFetch();
      setContent(result_fetch)
      //! fix get data()
      console.log(cropRef.current.getData());
      // let originX, originY, width, height = cropRef.current.getData;
      // let [originX, originY, width, height] = [250, 250, 200, 300];
      // console.log(originX, originY, width, height);
      // const manipulatedImage = await manipulateAsync(image, [
      //   {
      //     crop: {
      //       height: height,
      //       originX: originX,
      //       originY: originY,
      //       width: width,
      //     },
      //   },
      // ]);
      // console.log(manipulatedImage);
      // setImage(manipulatedImage.uri);
      // let result =  sendFetch(manipulatedImage)
      // let result = sendFetch("content result test sending to result page");
      // await onNavigatePress(result);
    } catch (e) {
      console.log(e);
    }
  }, [image]);

  useEffect(() => {
    (async function () {
      //3x initial render karena ada 3 setup
      checkCameraPermission();
      checkMediaPermission();
      initialCameraSetup();
    })();
  }, []);

  if (cameraPermission === false) {
    return <LoadingView />;
  }
  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      {content?(
        <ViewFullScreen>
          <WebView
              originWhitelist={['*']}
              source={{ html: content }}
          />
        </ViewFullScreen>
      ):image ? (
        <ViewFullScreen>
          <Image source={{ uri: image }} style={{ width:width,height:height}} />
          <ResizableDraggableView
            ref={cropRef}
            image={image}
          />
          <View style={{ flexDirection:'row' }}>
            {/* <Icon_Retake text={"Retake"} func={setImage(null)}/>
            <Icon_Done  text={"Done"} func={sendData}/> */}
            <Text onPress={() => setImage(null)}>retake</Text>
            <Text onPress={() => sendData()}>done</Text>
          </View>
        </ViewFullScreen>
      ) : (
          <Camera
            style={{ flex: 1,width:width,height:height}}
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            ratio="16:9"
          >
            <AlignHorizontally>
                {/* <Icon_Media func={openMedia}/>
                <Icon_Snapshot func={takePicture} onPress={()=>takePicture()}/>
                <Icon_Flash func={toggleFlash} on={flashMode==="torch"}/> */}
              <Text style={{color:'white'}} onPress={() => openMedia()}>media</Text>
              <Text style={{color:'white'}} onPress={() => takePicture()}>snapshot</Text>
              <Text style={{color:'white'}} onPress={() => toggleFlash()}>flash</Text>
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

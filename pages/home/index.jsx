import React, { useRef, useEffect, useCallback, useState } from "react";
import {
  Text,
  TouchableOpacity,
  View,
  Image,
  SafeAreaView,
} from "react-native";
import { Camera, CameraType } from "expo-camera";

import * as MediaLibrary from "expo-media-library";

import * as ImagePicker from "expo-image-picker";

import { captureRef } from "react-native-view-shot";

import ResizableDraggableView from "../../components/camera-center";

import { useWindowDimensions } from "react-native";
//svg components
// import CustomButton from "../../components/icons/custom-icon-button";

import { manipulateAsync, FlipType, SaveFormat } from 'expo-image-manipulator';

function LoadingView() {
  return (
    <View>
      <Text>No access to camera</Text>
    </View>
  );
}

export default function Homepage() {
  //expo camera
  const [image, setImage] = useState(null);
  const [type, setType] = useState(null);
  const [cameraPermission, setCameraPermission] = useState(null);
  const [mediaPermission, setMediaPermission] = useState(null);
  const [flashMode, setFlashMode] = useState(null);
  const cameraRef = useRef(null);
  const cropRef = useRef(null);
  const album_name = "lexo";
  const { height, width } = useWindowDimensions();
  // const {width,height} = useWindowDimensions();
  // const width = Math.round((height*9)/16)
  // const height = Math.round((width*16)/9)
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

  //take image from camera
  // const takePicture = async () => {
  //   try {
  //     const options = {
  //       quality: 0.7,
  //     };
  //     let data = await cameraRef.current.takePictureAsync(options);
  //     console.log(data);
  //     setImage(data.uri);
  //     //saving image
  //     // if (mediaPermission) {
  //     //   const asset = await MediaLibrary.createAssetAsync(image);
  //     //   await MediaLibrary.createAlbumAsync(album_name, asset, false);
  //     // }
  //   } catch (e) {
  //     console.log(e);
  //   }
  // };

  //take image from screenshoot
  const takePicture = async () => {
    try {

      const result = await captureRef(cameraRef.current, {
        result: "tmpfile",
        height: 420,
        width: 420,
        quality: 1,
        format: "jpg",
      });
      console.log(result);
      setImage(result);
      //saving image
      // if (mediaPermission) {
      //   const asset = await MediaLibrary.createAssetAsync(image);
      //   await MediaLibrary.createAlbumAsync(album_name, asset, false);
      // }
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
    data.append("file", {
      uri: image,
      type: "image/jpeg",
      name: "image.jpg",
    });
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1")
    .then((response) => response.json())
    .then((json) => {
      console.log(json);
    })
  },[image])

  const cropImage = async () => {
    // const targetPixelCount = 1080; // If you want full HD pictures
    // const pixelRatio = PixelRatio.get(); // The pixel ratio of the device
    // pixels * pixelratio = targetPixelCount, so pixels = targetPixelCount / pixelRatio
    // const pixels = targetPixelCount / pixelRatio;
    //pixel will be changed with the size of the element
    try {
      // const result = await captureRef(cropRef.current, {
      //   result: "tmpfile",
      //   height: 420,
      //   width: 420,
      //   quality: 1,
      //   format: "jpg",
      // });
      let originX, originY, width, height = cropRef.current.getData;
      console.log(height, width, originX, originY)
      // const result = manipulateAsync(image,{
      //   height: height,
      //   originX: originX,
      //   originY: originY,
      //   width: width
      // })
      // setImage(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    (async function () {
      checkCameraPermission();
      checkMediaPermission();
      initialCameraSetup();
    })();
  }, []);

  if (cameraPermission === false) {
    return <LoadingView />;
  }
  const getData = () => {
    console.log(cropRef.current.getData());
  }
  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      {image ? (
        <View>
            <Image
              source={{ uri: image }}
              style={{ width: width/2, height: height/2 }}
            />
            <ResizableDraggableView ref={cropRef} image={image}>
              <View>
                <TouchableOpacity onPress={() => setImage(null)}>
                  <Text>back</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => getData()}>
                  <Text>crop</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => sendFetch()}>
                  <Text>sendToApi</Text>
                </TouchableOpacity>
              </View>
            </ResizableDraggableView>

        </View>
      ) : (
        <View style={{ flex: 1 }}>
          <Camera
            style={{ width: width, height: height, flex: 1 }}
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            ratio="4:3"
          >
            <View
              style={{
                position: "absolute",
                flexDirection: "row",
                justifyContent: "space-evenly",
                bottom: 40,
                width: "100%",
                color: "white",
              }}
            >
              <TouchableOpacity onPress={() => openMedia()}>
                <Text>Media</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => takePicture()}>
                <Text>Snap</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => toggleFlash()}>
                <Text>Flash</Text>
              </TouchableOpacity>
            </View>
          </Camera>
        </View>
      )}
    </SafeAreaView>
  );
}

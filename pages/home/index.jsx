import React, { useCallback, useEffect, useRef, useState } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import { useIsFocused } from '@react-navigation/native'

import { Camera, CameraType } from 'expo-camera'

import styled from 'styled-components/native'

import * as ImagePicker from 'expo-image-picker'

import { captureRef } from 'react-native-view-shot'

import { useWindowDimensions } from 'react-native'

//svg components
import CameraOutline from '../../components/camera-outline'
import Icon_Flash from '../../components/icons/icon-flash'
import Icon_Media from '../../components/icons/icon-media'
import Icon_Snapshot from '../../components/icons/icon-snap'

import { ImagePickerOption, snapshotOption } from './constants'
import { getOptimalRatio } from './methods'

import { ImageEditor } from 'expo-image-editor'
import { useTextContentStore } from '../../store/text-content-store'
import { createFormData } from './methods'

function LoadingView() {
  return (
    <View>
      <Text>No access to camera</Text>
    </View>
  )
}

export default function Homepage({ route, navigation }) {
  //expo camera
  const [image, setImage] = useState(null)
  const [type, setType] = useState(null)
  const [cameraPermission, setCameraPermission] = useState(null)
  const [mediaPermission, setMediaPermission] = useState(null)
  const [ratio, setRatio] = useState(null)
  const [flashMode, setFlashMode] = useState(null)
  const cameraRef = useRef(null)
  const [editorVisible, setEditorVisible] = useState(false)
  const [loading, setLoading] = useState(false)
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  const isFocused = useIsFocused()

  const markdown = useTextContentStore((state) => state.markdown)
  const setContent = useTextContentStore((state) => state.setContent)

  //navigation
  const toggleFlash = () =>
    setFlashMode((current) => (current === 'torch' ? 'off' : 'torch'))

  const checkCameraPermission = useCallback(async () => {
    const permission = await Camera.requestCameraPermissionsAsync()
    setCameraPermission(permission.status === 'granted')
  }, [cameraPermission])

  const checkMediaPermission = useCallback(async () => {
    const permission = await ImagePicker.requestMediaLibraryPermissionsAsync()
    setMediaPermission(permission.status === 'granted')
  }, [mediaPermission])

  const cameraRatio = useCallback(async () => {
    try {
      const ratios = await cameraRef.current.getSupportedRatiosAsync()
      let choose_ratio = await getOptimalRatio(ratios)
      setRatio(choose_ratio)
    } catch (e) {
      console.log(e)
    }
  }, [ratio])

  const initialCameraSetup = () => {
    setType(CameraType.back)
    setFlashMode('off')
    cameraRatio()
  }

  const onNavigatePress = async () => {
    setLoading(false)
    await navigation.navigate('Result', {
      previousScreen: route.name,
    })
  }

  //take image from screenshoot
  const takePicture = async () => {
    try {
      const result = await captureRef(cameraRef.current, snapshotOption)
      setImage(result)
      setEditorVisible(true)
    } catch (e) {
      console.log(e)
    }
  }

  const openMedia = async () => {
    const image = await ImagePicker.launchImageLibraryAsync(
      ImagePickerOption
    ).catch((e) => {
      console.log(e)
    })

    if (image.cancelled) {
      return
    }

    setImage(image.uri)
    setEditorVisible(true)
  }

  const sendFetch = useCallback(
    async (imgURI) => {
      const data = createFormData(imgURI, 1, 10)
      //dummy content
      setContent('**this** is **da**ta **from** the *server*')
      onNavigatePress()

      // await Api.post('bionic', data, {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //   },
      // })
      //   .then((response) => {
      //     const { result, result_raw, bounding_box } = response.data
      //     if (result === '') {
      //       alert('No text detected')
      //     }
      //     if (result !== undefined) {
      //       setContent(result)
      //       onNavigatePress()
      //     }
      //     setLoading(false)
      //   })
      //   .catch((err) => {
      //     console.log(err)
      //   })
    },
    [image]
  )

  useEffect(() => {
    ;(async function () {
      //3x initial render karena ada 3 setup
      setImage(null)
      checkCameraPermission()
      checkMediaPermission()
      initialCameraSetup()
    })()
  }, [])

  if (cameraPermission === false) {
    return <LoadingView />
  }

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
    )
  }

  return (
    <SafeAreaView style={{ flex: 1 }} collapsable={false}>
      {isFocused && (
        <ViewFullScreen>
          <Camera
            style={{ flex: 1, width: screenWidth, height: screenHeight }}
            type={type}
            flashMode={flashMode}
            ref={cameraRef}
            ratio={ratio}
            onCameraReady={() => initialCameraSetup()}
          >
            <CameraOutline />
            <AlignHorizontally>
              <Icon_Media
                style={{ color: 'white' }}
                onPress={() => openMedia()}
              />
              <Icon_Snapshot
                style={{ color: 'white' }}
                onPress={() => takePicture()}
              />
              <Icon_Flash
                style={{ color: 'white' }}
                onPress={() => toggleFlash()}
                on={flashMode === 'torch'}
              />
            </AlignHorizontally>
          </Camera>
          <ImageEditor
            visible={editorVisible}
            imageUri={image}
            style={{ width: screenWidth, height: screenHeight, opacity: 0 }}
            onEditingComplete={async (result) => {
              setLoading(true)
              sendFetch(result.uri)
              setEditorVisible(false)
            }}
            onCloseEditor={() => {
              setImage(null)
              setEditorVisible(false)
            }}
            minimumCropDimensions={{
              width: 5,
              height: 5,
            }}
            mode="crop-only"
            // allowedTransformOperations={['rotate', 'crop']}
          />
        </ViewFullScreen>
      )}
    </SafeAreaView>
  )
}

const ViewFullScreen = styled.View`
  flex: 1;
`

const AlignHorizontally = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  position: absolute;
  bottom: 40px;
  width: 100%;
`

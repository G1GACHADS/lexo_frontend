import { useWindowDimensions } from 'react-native'
import styled from 'styled-components'
import BottomSnap from '../assets/homepage/bottomSnap.svg'
import TopSnap from '../assets/homepage/topSnap.svg'

export default function Outline_Camera() {
  const { height: screenHeight, width: screenWidth } = useWindowDimensions()
  return (
    <ViewFullScreen visibility={0} touchable={false}>
      <TopSnap />
      <BottomSnap />
    </ViewFullScreen>
  )
}

const ViewFullScreen = styled.View`
  position: absolute;
  width: 100%;
  height: 70%;
  // background:white;
  align-items: center;
  justify-content: space-between;
  padding: 20% 0 0 0;
`

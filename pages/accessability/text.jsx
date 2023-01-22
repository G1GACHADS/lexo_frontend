import React, { useCallback, useRef, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { View } from "react-native";
import Text from "../../components/text";

import SizeIcon from "../../components/icons/size-icon";
import HeightIcon from "../../components/icons/height-icon";
import SpaceIcon from "../../components/icons/space-icon";
import ParagraphIcon from "../../components/icons/paragraph-icon";

import SizeIconActive from "../../components/icons/size-icon-active";
import HeightIconActive from "../../components/icons/height-icon-active";
import SpaceIconActive from "../../components/icons/space-icon-active";
import ParagraphIconActive from "../../components/icons/paragraph-icon-active";

import Slider from "@react-native-community/slider";
// import SizeMini from "../../components/icons/size-mini";
// import HeightMini from "../../components/icons/height-mini";
// import SpaceMini from "../../components/icons/space-mini";
// import ParagraphMini from "../../components/icons/paragraph-mini";
// import SizeNormal from "../../components/icons/size-normal";
// import HeightNormal from "../../components/icons/height-normal";
// import SpaceNormal from "../../components/icons/space-normal";
// import ParagraphNormal from "../../components/icons/paragraph-normal";

export default function TextSection() {
  const theme = useTheme();
  const [isSizeActive, setSizeActive] = useState(false);
  const [isHeightActive, setHeightActive] = useState(false);
  const [isLetterSpaceActive, setLetterSpaceActive] = useState(false);
  const [isParagraphSpaceActive, setParagraphSpaceActive] = useState(false);
  const handleSizePress = () => {
    setSizeActive(true);
    setHeightActive(false);
    setLetterSpaceActive(false);
    setParagraphSpaceActive(false);
  };

  const handleHeightPress = () => {
    setSizeActive(false);
    setHeightActive(true);
    setLetterSpaceActive(false);
    setParagraphSpaceActive(false);
  };

  const handleLetterSpacePress = () => {
    setSizeActive(false);
    setHeightActive(false);
    setLetterSpaceActive(true);
    setParagraphSpaceActive(false);
  };

  const handleParagraphSpacePress = () => {
    setSizeActive(false);
    setHeightActive(false);
    setLetterSpaceActive(false);
    setParagraphSpaceActive(true);
  };

  // const heightSlider = () => {
  // return(
  //   <>
  //     <HeightMini />
  //     <Slider
  //       style={{ width: "80%", height: 40 }}
  //       minimumValue={10}
  //       maximumValue={50}
  //       step={10}
  //       minimumTrackTintColor="#000000"
  //       maximumTrackTintColor="#000000"
  //       thumbTintColor="#000000"
  //       onValueChange={(value) => setSaccade(value)}
  //       onSlidingComplete={() =>
  //         console.log("sliding complete") & sendFetch()
  //       }
  //     />
  //     <HeightNormal />
  //   </>
  //   )
  // };
  return (
    <View>
      <Text
        color={theme.colors.black}
        family={theme.typography.family.bold}
        size={theme.typography.label.sz}
        mb={15}
      >
        Text Style
      </Text>
      <CustomContainer>
        <ButtonContainer
          style={{ 
            width: 68.75, height: 44, 
            justifyContent: "center",
            backgroundColor: isSizeActive
              ? theme.colors.black
              : theme.colors.white,
            borderColor: isSizeActive
              ? theme.colors.black
              : theme.colors.grey1,
          }}
          onPress={() => {
            handleSizePress();
          }}
        >
          {isSizeActive ? <SizeIconActive /> : <SizeIcon />}
        </ButtonContainer>
        <ButtonContainer
          style={{ 
            width: 68.75, height: 44, 
            justifyContent: "center",
            backgroundColor: isHeightActive
              ? theme.colors.black
              : theme.colors.white,
            borderColor: isHeightActive
              ? theme.colors.black
              : theme.colors.grey1,
          }}
          onPress={() => {
            handleHeightPress();
          }}
        >
          {isHeightActive ? <HeightIconActive /> : <HeightIcon />}
        </ButtonContainer>
        <ButtonContainer
          style={{ 
            width: 68.75, height: 44, 
            justifyContent: "center",
            backgroundColor: isLetterSpaceActive
              ? theme.colors.black
              : theme.colors.white,
            borderColor: isLetterSpaceActive
              ? theme.colors.black
              : theme.colors.grey1,
          }}
          onPress={() => {
            handleLetterSpacePress();
          }}
        >
          {isLetterSpaceActive ? <SpaceIconActive /> : <SpaceIcon />}
        </ButtonContainer>
        <ButtonContainer
          style={{ 
            width: 68.75, height: 44, 
            justifyContent: "center",
            backgroundColor: isParagraphSpaceActive
              ? theme.colors.black
              : theme.colors.white,
            borderColor: isParagraphSpaceActive
              ? theme.colors.black
              : theme.colors.grey1,
           }}
          onPress={() => {
            handleParagraphSpacePress();
          }}
        >
          {isParagraphSpaceActive ? <ParagraphIconActive /> : <ParagraphIcon />}
        </ButtonContainer>
      </CustomContainer>
      <Container>
        {
          isSizeActive //&& sizeSlider
        }
        {
          isHeightActive //&& heightSlider
        }
        {
          isLetterSpaceActive //&& letterSpaceSlider
        }
        {
          isParagraphSpaceActive //&& paragraphSpaceSlider
        }
      </Container>
      <Text
        color={theme.colors.black}
        family={theme.typography.family.bold}
        size={theme.typography.label.sz}
        mb={15}
      >
        Font Family
      </Text>
    </View>
  );
}

const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`;
const CustomContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;
const ButtonContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`;

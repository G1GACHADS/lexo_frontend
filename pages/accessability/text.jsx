import React, { useState } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'

import HeightIcon from '../../components/icons/height-icon'
import ParagraphIcon from '../../components/icons/paragraph-icon'
import SizeIcon from '../../components/icons/size-icon'
import SpaceIcon from '../../components/icons/space-icon'

import Slider from '@react-native-community/slider'
import BaseText from '../../components/base-text'
import HeightIconActive from '../../components/icons/height-icon-active'
import ParagraphIconActive from '../../components/icons/paragraph-icon-active'
import SizeIconActive from '../../components/icons/size-icon-active'
import SpaceIconActive from '../../components/icons/space-icon-active'

import HeightMini from '../../components/icons/height-mini'
import ParagraphMini from '../../components/icons/paragraph-mini'
import SizeMini from '../../components/icons/size-mini'
import SpaceMini from '../../components/icons/space-mini'
import { useTextStyleStore } from '../../store/text-styling-store'
// import SizeNormal from "../../components/icons/size-normal";
// import HeightNormal from "../../components/icons/height-normal";
// import SpaceNormal from "../../components/icons/space-normal";
// import ParagraphNormal from "../../components/icons/paragraph-normal";

const textStyleOption = {
  SIZE: 0,
  LINE_HEIGHT: 1,
  LETTER_SPACING: 2,
  ALIGNMENT: 3,
}

export default function TextSection() {
  const theme = useTheme()

  const textSize = useTextStyleStore((state) => state.textStyleSize)
  const textLineHeight = useTextStyleStore((state) => state.textStyleLineHeight)
  const textLetterSpacing = useTextStyleStore(
    (state) => state.textStyleLetterSpacing
  )

  const changeTextSize = useTextStyleStore((state) => state.changeTextSize)
  const changeTextLineHeight = useTextStyleStore(
    (state) => state.changeTextLineHeight
  )
  const changeTextLetterSpacing = useTextStyleStore(
    (state) => state.changeTextLetterSpacing
  )

  const [selectedConfig, setSelectedConfig] = useState(textStyleOption.SIZE)

  const isConfigSelected = (option) => selectedConfig === option

  const textOptions = [
    {
      name: textStyleOption.SIZE,
      active: <SizeIconActive />,
      idle: <SizeIcon />,
    },
    {
      name: textStyleOption.LINE_HEIGHT,
      active: <HeightIconActive />,
      idle: <HeightIcon />,
    },
    {
      name: textStyleOption.LETTER_SPACING,
      active: <SpaceIconActive />,
      idle: <SpaceIcon />,
    },
    {
      name: textStyleOption.ALIGNMENT,
      active: <ParagraphIconActive />,
      idle: <ParagraphIcon />,
    },
  ]

  return (
    <View>
      <BaseText bold label mb={15}>
        Text Style
      </BaseText>
      <CustomContainer>
        {textOptions.map((opt) => (
          <ButtonContainer
            key={opt.name}
            style={{
              width: 68.75,
              height: 44,
              justifyContent: 'center',
              backgroundColor: isConfigSelected(opt.name)
                ? theme.colors.black
                : theme.colors.white,
              borderColor: isConfigSelected(opt.name)
                ? theme.colors.black
                : theme.colors.grey1,
            }}
            onPress={() => setSelectedConfig(opt.name)}
          >
            {isConfigSelected(opt.name) ? opt.active : opt.idle}
          </ButtonContainer>
        ))}
      </CustomContainer>
      <Container>
        {isConfigSelected(textStyleOption.SIZE) && (
          <>
            <SizeMini />
            <Slider
              style={{ width: '80%', height: 50 }}
              minimumValue={12}
              maximumValue={24}
              step={1}
              minimumTrackTintColor={theme.colors.black}
              maximumTrackTintColor={theme.colors.black}
              thumbTintColor={theme.colors.black}
              value={textSize}
              onSlidingComplete={(value) => changeTextSize(value)}
            />
            <SizeIcon />
          </>
        )}
        {isConfigSelected(textStyleOption.LINE_HEIGHT) && (
          <>
            <HeightMini />
            <Slider
              style={{ width: '80%', height: 50 }}
              minimumValue={18}
              maximumValue={40}
              step={1}
              minimumTrackTintColor={theme.colors.black}
              maximumTrackTintColor={theme.colors.black}
              thumbTintColor={theme.colors.black}
              value={textLineHeight}
              onSlidingComplete={(value) => changeTextLineHeight(value)}
            />
            <HeightIcon />
          </>
        )}
        {isConfigSelected(textStyleOption.LETTER_SPACING) && (
          <>
            <SpaceMini />
            <Slider
              style={{ width: '80%', height: 50 }}
              minimumValue={0}
              maximumValue={0.3}
              step={0.01}
              minimumTrackTintColor={theme.colors.black}
              maximumTrackTintColor={theme.colors.black}
              thumbTintColor={theme.colors.black}
              value={textLetterSpacing}
              onSlidingComplete={(value) => changeTextLetterSpacing(value)}
            />
            <SpaceIcon />
          </>
        )}
        {isConfigSelected(textStyleOption.ALIGNMENT) && (
          <>
            <ParagraphMini />
            <Slider
              style={{ width: '80%', height: 50 }}
              minimumValue={1}
              maximumValue={5}
              step={1}
              minimumTrackTintColor={theme.colors.black}
              maximumTrackTintColor={theme.colors.black}
              thumbTintColor={theme.colors.black}
              onSlidingComplete={(value) => console.log(value)}
            />
            <ParagraphIcon />
          </>
        )}
      </Container>
      <BaseText bold label mb={15}>
        Font Family
      </BaseText>
    </View>
  )
}

const Container = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const CustomContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const ButtonContainer = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`

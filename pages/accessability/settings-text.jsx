import React, { useState } from 'react'
import { View } from 'react-native'
import styled, { css, useTheme } from 'styled-components/native'

import HeightIcon from '../../components/icons/height-icon'
import SizeIcon from '../../components/icons/size-icon'
import SpaceIcon from '../../components/icons/space-icon'

import Slider from '@react-native-community/slider'
import BaseText from '../../components/base-text'
import HeightIconActive from '../../components/icons/height-icon-active'
import SizeIconActive from '../../components/icons/size-icon-active'
import SpaceIconActive from '../../components/icons/space-icon-active'

import HeightMini from '../../components/icons/height-mini'
import IconAlignment from '../../components/icons/icon-alignment'
import IconAlignmentActive from '../../components/icons/icon-alignment-active'
import IconAlignmentCenter from '../../components/icons/icon-alignment-center'
import IconAlignmentCenterActive from '../../components/icons/icon-alignment-center-active'
import IconAlignmentJustify from '../../components/icons/icon-alignment-justify'
import IconAlignmentJustifyActive from '../../components/icons/icon-alignment-justify-active'
import IconAlignmentLeft from '../../components/icons/icon-alignment-left'
import IconAlignmentLeftActive from '../../components/icons/icon-alignment-left-active'
import IconAlignmentRight from '../../components/icons/icon-alignment-right'
import IconAlignmentRightActive from '../../components/icons/icon-alignment-right-active'
import SizeMini from '../../components/icons/size-mini'
import SpaceMini from '../../components/icons/space-mini'
import { useTextStyleStore } from '../../store/text-styling-store'
// import SizeNormal from "../../components/icons/size-normal";
// import HeightNormal from "../../components/icons/height-normal";
// import SpaceNormal from "../../components/icons/space-normal";
// import ParagraphNormal from "../../components/icons/paragraph-normal";

const textStyleOption = {
  SIZE: 'SIZE',
  LINE_HEIGHT: 'LINE_HEIGHT',
  LETTER_SPACING: 'LETTER_SPACING',
  ALIGNMENT: 'ALIGNMENT',
}

const FontFamilySection = ({ typography }) => {
  const textFontFamily = useTextStyleStore((state) => state.fontFamily)
  const changeFontFamily = useTextStyleStore((state) => state.changeFontFamily)

  const fontFamilyOptions = [
    {
      name: typography.family.medium,
      strongName: typography.family.bold,
      key: 'medium',
      strongKey: 'bold',
      label: 'A',
    },
    {
      name: typography.family.robotoSerifMedium,
      strongName: typography.family.robotoSerifBold,
      key: 'robotoSerifMedium',
      strongKey: 'robotoSerifBold',
      label: 'B',
    },
    {
      name: typography.family.ptSerifRegular,
      strongName: typography.family.ptSerifBold,
      key: 'ptSerifRegular',
      strongKey: 'ptSerifBold',
      label: 'C',
    },
    {
      name: typography.family.interMedium,
      strongName: typography.family.interBold,
      key: 'interMedium',
      strongKey: 'interBold',
      label: 'D',
    },
    {
      name: typography.family.openDyslexicRegular,
      strongName: typography.family.openDyslexicBold,
      key: 'openDyslexicRegular',
      strongKey: 'openDyslexicBold',
      label: 'E',
    },
    {
      name: typography.family.comicRegular,
      strongName: typography.family.comicBold,
      key: 'comicRegular',
      strongKey: 'comicBold',
      label: 'F',
    },
  ]

  const getFontFamilyLabelColor = (fontFamilyName) =>
    fontFamilyName === textFontFamily ? 'black' : 'grey2'

  return (
    <>
      <BaseText bold label mb={15}>
        Font Family
      </BaseText>
      <FontFamilyRow>
        {fontFamilyOptions
          .slice(0, fontFamilyOptions.length / 2)
          .map((fontFamily, idx) => {
            return (
              <FontFamilyOptionButton
                key={idx}
                onPress={() =>
                  changeFontFamily({
                    family: fontFamily.name,
                    strong: fontFamily.strongName,
                  })
                }
              >
                <BaseText
                  bold={fontFamily.name === typography.family.medium}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifBold={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  heading
                  mb={15}
                >
                  Aa
                </BaseText>
                <BaseText
                  bold={fontFamily.name === typography.family.medium}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifBold={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  subheading
                  mb={15}
                >
                  {fontFamily.label}
                </BaseText>
              </FontFamilyOptionButton>
            )
          })}
      </FontFamilyRow>
      <FontFamilyRow>
        {fontFamilyOptions
          .slice(fontFamilyOptions.length / 2, fontFamilyOptions.length)
          .map((fontFamily, idx) => {
            return (
              <FontFamilyOptionButton
                key={idx}
                onPress={() =>
                  changeFontFamily({
                    family: fontFamily.name,
                    strong: fontFamily.strongName,
                  })
                }
              >
                <BaseText
                  interBold={fontFamily.name === typography.family.interMedium}
                  openDyslexicBold={
                    fontFamily.name === typography.family.openDyslexicRegular
                  }
                  comicBold={fontFamily.name === typography.family.comicRegular}
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  heading
                  mb={15}
                >
                  Aa
                </BaseText>
                <BaseText
                  interBold={fontFamily.name === typography.family.interMedium}
                  openDyslexicBold={
                    fontFamily.name === typography.family.openDyslexicRegular
                  }
                  comicBold={fontFamily.name === typography.family.comicRegular}
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  subheading
                  mb={15}
                >
                  {fontFamily.label}
                </BaseText>
              </FontFamilyOptionButton>
            )
          })}
      </FontFamilyRow>
    </>
  )
}

const TextAlignmentGroup = ({ theme }) => {
  const alignment = useTextStyleStore((state) => state.alignment)
  const changeTextAlignment = useTextStyleStore(
    (state) => state.changeTextAlignment
  )

  const isAlignmentActive = (alignmentType) => alignment === alignmentType

  return (
    <TextAlignmentButtonContainer>
      <TextAlignmentButtonGroup>
        <TextAlignmentButton
          lhs
          active={isAlignmentActive('left')}
          onPress={() => changeTextAlignment('left')}
        >
          {isAlignmentActive('left') && <IconAlignmentLeftActive />}
          {!isAlignmentActive('left') && <IconAlignmentLeft />}
        </TextAlignmentButton>
        <TextAlignmentButton
          active={isAlignmentActive('center')}
          onPress={() => changeTextAlignment('center')}
        >
          {isAlignmentActive('center') && <IconAlignmentCenterActive />}
          {!isAlignmentActive('center') && <IconAlignmentCenter />}
        </TextAlignmentButton>
        <TextAlignmentButton
          active={isAlignmentActive('right')}
          onPress={() => changeTextAlignment('right')}
        >
          {isAlignmentActive('right') && <IconAlignmentRightActive />}
          {!isAlignmentActive('right') && <IconAlignmentRight />}
        </TextAlignmentButton>
        <TextAlignmentButton
          rhs
          active={isAlignmentActive('justify')}
          onPress={() => changeTextAlignment('justify')}
        >
          {isAlignmentActive('justify') && <IconAlignmentJustifyActive />}
          {!isAlignmentActive('justify') && <IconAlignmentJustify />}
        </TextAlignmentButton>
      </TextAlignmentButtonGroup>
    </TextAlignmentButtonContainer>
  )
}

const TextAlignmentButtonContainer = styled.View`
  flex: 1;
`

const TextAlignmentButtonGroup = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 0;
`

const TextAlignmentButton = styled.Pressable`
  flex: 0.25;
  align-items: center;
  background-color: ${({ active, theme }) =>
    active ? theme.colors.black : theme.colors.white};
  border: 2px solid
    ${({ active, theme }) => (active ? theme.colors.black : theme.colors.grey1)};
  padding: 10px 28px;

  ${({ lhs }) => {
    if (lhs) {
      return css`
        border-top-left-radius: 5px;
        border-bottom-left-radius: 5px;
      `
    }
  }}

  ${({ rhs }) => {
    if (rhs) {
      return css`
        border-top-right-radius: 5px;
        border-bottom-right-radius: 5px;
      `
    }
  }}
`

export default function SettingsText() {
  const theme = useTheme()

  const textSize = useTextStyleStore((state) => state.size)
  const textLineHeight = useTextStyleStore((state) => state.lineHeight)
  const textLetterSpacing = useTextStyleStore((state) => state.letterSpacing)

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
      active: <IconAlignmentActive />,
      idle: <IconAlignment />,
    },
  ]

  return (
    <View>
      <BaseText bold label mb={15}>
        Text Style
      </BaseText>
      <TextOptionsContainer>
        {textOptions.map((opt) => (
          <TextOptionButton
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
          </TextOptionButton>
        ))}
      </TextOptionsContainer>
      <TextOptionContentContainer>
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
        {isConfigSelected(textStyleOption.ALIGNMENT) && <TextAlignmentGroup />}
      </TextOptionContentContainer>
      <FontFamilySection typography={theme.typography} />
    </View>
  )
}

const TextOptionContentContainer = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const TextOptionsContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const TextOptionButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  padding: 8px 10px;
  border: 2px solid #e0e0e0;
  border-radius: 5px;
`

const FontFamilyRow = styled.View`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  align-items: center;
`

const FontFamilyOptionButton = styled.Pressable`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 50px;
`

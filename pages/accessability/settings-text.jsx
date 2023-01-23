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
      key: 'medium',
      label: 'Plus Jakarta Sans',
    },
    {
      name: typography.family.robotoSerifMedium,
      key: 'robotoSerifMedium',
      label: 'Roboto Serif',
    },
    {
      name: typography.family.ptSerifRegular,
      key: 'ptSerifRegular',
      label: 'PT Serif',
    },
    { name: typography.family.interMedium, key: 'interMedium', label: 'Inter' },
    {
      name: typography.family.openDyslexicMedium,
      key: 'openDyslexicMedium',
      label: 'Open Dyslexic',
    },
    {
      name: typography.family.dyslexieMedium,
      key: 'dyslexieMedium',
      label: 'Dyslexie',
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
                onPress={() => changeFontFamily(fontFamily.name)}
              >
                <BaseText
                  semiBold={fontFamily.name === typography.family.semiBold}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifRegular={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  interMedium={
                    fontFamily.name === typography.family.interMedium
                  }
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  heading
                  mb={15}
                >
                  Aa
                </BaseText>
                <BaseText
                  semiBold={fontFamily.name === typography.family.semiBold}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifRegular={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  interMedium={
                    fontFamily.name === typography.family.interMedium
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
                onPress={() => changeFontFamily(fontFamily.name)}
              >
                <BaseText
                  semiBold={fontFamily.name === typography.family.semiBold}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifRegular={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  interMedium={
                    fontFamily.name === typography.family.interMedium
                  }
                  color={getFontFamilyLabelColor(fontFamily.name)}
                  bold
                  heading
                  mb={15}
                >
                  Aa
                </BaseText>
                <BaseText
                  semiBold={fontFamily.name === typography.family.semiBold}
                  robotoSerifMedium={
                    fontFamily.name === typography.family.robotoSerifMedium
                  }
                  ptSerifRegular={
                    fontFamily.name === typography.family.ptSerifRegular
                  }
                  interMedium={
                    fontFamily.name === typography.family.interMedium
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
    </>
  )
}

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
      active: <ParagraphIconActive />,
      idle: <ParagraphIcon />,
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

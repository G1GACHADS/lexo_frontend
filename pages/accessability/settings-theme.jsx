import React, { useState } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BaseText from '../../components/base-text'

const themeOption = {
  DEFAULT: 'DEFAULT',
  CALM: 'CALM',
  FOCUS: 'FOCUS',
}

export default function SettingsTheme() {
  const theme = useTheme()

  const [selectedTheme, setSelectedTheme] = useState(themeOption.DEFAULT)
  const isThemeSelected = (theme) => theme === selectedTheme

  return (
    <View>
      <BaseText bold label mb={15}>
        Warna Tema
      </BaseText>
      <ThemeContainer>
        <ThemeOptionButton
          onPress={() => setSelectedTheme(themeOption.DEFAULT)}
          isSelected={isThemeSelected(themeOption.DEFAULT)}
          style={{
            backgroundColor: theme.colors.white,
            borderColor: isThemeSelected(themeOption.DEFAULT)
              ? theme.colors.black
              : theme.colors.grey1,
          }}
        >
          <BaseText bold label>
            Default
          </BaseText>
        </ThemeOptionButton>
        <ThemeOptionButton
          onPress={() => setSelectedTheme(themeOption.CALM)}
          isSelected={isThemeSelected(themeOption.CALM)}
          style={{
            backgroundColor: theme.colors.calmBg,
            borderColor: isThemeSelected(themeOption.CALM)
              ? theme.colors.black
              : theme.colors.grey1,
          }}
        >
          <BaseText color="calmTxt" bold label>
            Tenang
          </BaseText>
        </ThemeOptionButton>
        <ThemeOptionButton
          onPress={() => setSelectedTheme(themeOption.FOCUS)}
          isSelected={isThemeSelected(themeOption.FOCUS)}
          style={{
            backgroundColor: theme.colors.focusBg,
            borderColor: isThemeSelected(themeOption.FOCUS)
              ? theme.colors.black
              : theme.colors.grey1,
          }}
        >
          <BaseText color="focusTxt" bold label>
            Fokus
          </BaseText>
        </ThemeOptionButton>
      </ThemeContainer>
    </View>
  )
}

const ThemeContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`

const ThemeOptionButton = styled.Pressable`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  width: 96.67px;
  height: 50px;
  padding-top: 10px;
  border: 2px solid #e0e0e0;
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`

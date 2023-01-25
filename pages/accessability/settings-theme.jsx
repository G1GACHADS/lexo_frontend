import React from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import BaseText from '../../components/base-text'
import {
  readingThemeOption,
  useReadingThemeStore,
} from '../../store/reading-theme-store'

export default function SettingsTheme() {
  const theme = useTheme()

  const selectedReadingTheme = useReadingThemeStore(
    (state) => state.readingTheme
  )
  const setReadingTheme = useReadingThemeStore((state) => state.setReadingTheme)
  const isThemeSelected = (theme) => theme === selectedReadingTheme

  return (
    <View>
      <BaseText bold label mb={15}>
        Warna Tema
      </BaseText>
      <ThemeContainer>
        <ThemeOptionButton
          onPress={() => setReadingTheme(readingThemeOption.DEFAULT)}
          isSelected={isThemeSelected(readingThemeOption.DEFAULT)}
          style={{
            backgroundColor: theme.colors.white,
            borderColor: isThemeSelected(readingThemeOption.DEFAULT)
              ? theme.colors.black
              : theme.colors.grey1,
          }}
        >
          <BaseText bold label>
            Default
          </BaseText>
        </ThemeOptionButton>
        <ThemeOptionButton
          onPress={() => setReadingTheme(readingThemeOption.CALM)}
          isSelected={isThemeSelected(readingThemeOption.CALM)}
          style={{
            backgroundColor: theme.colors.calmBg,
            borderColor: isThemeSelected(readingThemeOption.CALM)
              ? theme.colors.black
              : theme.colors.grey1,
          }}
        >
          <BaseText color="calmTxt" bold label>
            Tenang
          </BaseText>
        </ThemeOptionButton>
        <ThemeOptionButton
          onPress={() => setReadingTheme(readingThemeOption.FOCUS)}
          isSelected={isThemeSelected(readingThemeOption.FOCUS)}
          style={{
            backgroundColor: theme.colors.focusBg,
            borderColor: isThemeSelected(readingThemeOption.FOCUS)
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
  border-radius: 10px;
`

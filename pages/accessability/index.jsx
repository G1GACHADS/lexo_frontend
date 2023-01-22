import BottomSheet, { BottomSheetView } from '@gorhom/bottom-sheet'
import React, { useCallback, useMemo, useRef, useState } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Text from '../../components/text'

import ThreeButtonToggle from './try'

import BionicSection from './bionic'
import TextSection from './text'
import ThemeSection from './theme'

import BionicIcon from '../../components/icons/bionic-icon'
import TextIcon from '../../components/icons/text-icon'
import ThemeIcon from '../../components/icons/theme-icon'

import BionicIconActive from '../../components/icons/bionic-icon-active'
import TextIconActive from '../../components/icons/text-icon-active'
import ThemeIconActive from '../../components/icons/theme-icon-active'

// import Slider from "./slider";

const custom = {
  BIONIC: 'bionic',
  TEXT: 'text',
  THEME: 'theme',
}

export default function Button_Sheet() {
  const theme = useTheme()

  const [selectedCustom, setSelectedCustom] = useState([])

  // State of Top Button Functions

  const [isBionicActive, setBionicActive] = useState(false)
  const [isTextActive, setTextActive] = useState(false)
  const [isThemeActive, setThemeActive] = useState(false)

  const handleBionicPress = () => {
    setBionicActive(true)
    setTextActive(false)
    setThemeActive(false)
  }

  const handleTextPress = () => {
    setBionicActive(false)
    setTextActive(true)
    setThemeActive(false)
  }

  const handleThemePress = () => {
    setBionicActive(false)
    setTextActive(false)
    setThemeActive(true)
  }

  // custom top select
  function customSelected(custom) {
    return selectedCustom.includes(custom)
  }

  function toggleCustomFilter(custom) {
    if (!customSelected(custom)) {
      setSelectedCustom((selectedCustom) => [...selectedCustom, custom])
      return
    }
    setSelectedCustom((selectedCustom) =>
      selectedCustom.filter((selectedCustom) => selectedCustom !== custom)
    )
  }

  const snapPoints = useMemo(() => ['30%', '50%', '100%'], [])
  const sheetRef = useRef(null)

  const handleSheetChange = useCallback((index) => {
    console.log('handleSheetChange', index)
  }, [])
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index)
  }, [])
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close()
  }, [])

  return (
    <View style={{ flex: 1 }}>
      {/* <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} /> */}
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <BottomSheetView>
          <Container>
            <ThreeButtonToggle />
            <CustomContainer>
              <ButtonContainer
                onPress={() => {
                  toggleCustomFilter(custom.BIONIC)
                  handleBionicPress()
                  handleSnapPress(2)
                }}
                isSelected={customSelected(custom.BIONIC)}
                style={{
                  backgroundColor: isBionicActive
                    ? theme.colors.black
                    : theme.colors.white,
                  borderColor: isBionicActive
                    ? theme.colors.black
                    : theme.colors.grey1,
                }}
              >
                {isBionicActive ? <BionicIconActive /> : <BionicIcon />}
                <Text
                  color={
                    isBionicActive ? theme.colors.white : theme.colors.black
                  }
                  family={theme.typography.family.bold}
                  size={theme.typography.label.sz}
                  pl={5}
                >
                  Bionic
                </Text>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => {
                  toggleCustomFilter(custom.TEXT)
                  handleTextPress()
                  handleSnapPress(2)
                }}
                isSelected={customSelected(custom.TEXT)}
                style={{
                  backgroundColor: isTextActive
                    ? theme.colors.black
                    : theme.colors.white,
                  borderColor: isTextActive
                    ? theme.colors.black
                    : theme.colors.grey1,
                }}
              >
                {isTextActive ? <TextIconActive /> : <TextIcon />}
                <Text
                  color={isTextActive ? theme.colors.white : theme.colors.black}
                  family={theme.typography.family.bold}
                  size={theme.typography.label.sz}
                  pl={5}
                >
                  Text
                </Text>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => {
                  toggleCustomFilter(custom.THEME)
                  handleThemePress()
                  handleSnapPress(2)
                }}
                isSelected={customSelected(custom.THEME)}
                style={{
                  backgroundColor: isThemeActive
                    ? theme.colors.black
                    : theme.colors.white,
                  borderColor: isThemeActive
                    ? theme.colors.black
                    : theme.colors.grey1,
                }}
              >
                {isThemeActive ? <ThemeIconActive /> : <ThemeIcon />}
                <Text
                  color={
                    isThemeActive ? theme.colors.white : theme.colors.black
                  }
                  family={theme.typography.family.bold}
                  size={theme.typography.label.sz}
                  pl={5}
                >
                  Theme
                </Text>
              </ButtonContainer>
            </CustomContainer>
            {isBionicActive && <BionicSection />}
            {isTextActive && <TextSection />}
            {isThemeActive && <ThemeSection />}
          </Container>
        </BottomSheetView>
      </BottomSheet>
    </View>
  )
}

const Container = styled.View`
  margin: 20px;
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
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`

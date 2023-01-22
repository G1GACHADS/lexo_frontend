import React, { useState } from 'react'
import { View } from 'react-native'
import styled, { useTheme } from 'styled-components/native'
import Text from '../../components/text'

const customBg = {
  DEFAULT: 'default',
  CALM: 'calm',
  FOCUS: 'focus',
}
export default function ThemeSection() {
  const theme = useTheme()

  const [selectedCustomBg, setSelectedCustomBg] = useState([])
  function customBgSelected(customBg) {
    return selectedCustomBg.includes(customBg)
  }
  function toggleCustomBgFilter(customBg) {
    if (!customBgSelected(customBg)) {
      setSelectedCustomBg((selectedCustomBg) => [...selectedCustomBg, customBg])
      return
    }
    setSelectedCustomBg((selectedCustomBg) =>
      selectedCustomBg.filter(
        (selectedCustomBg) => selectedCustomBg !== customBg
      )
    )
  }

  return (
    <View>
      <Text
        color={theme.colors.black}
        family={theme.typography.family.bold}
        size={theme.typography.label.sz}
        mb={15}
      >
        Color Theme
      </Text>
      <CustomContainer>
        <CustomBgContainer
          onPress={() => toggleCustomBgFilter(customBg.DEFAULT)}
          isSelected={customBgSelected(customBg.DEFAULT)}
          style={{ backgroundColor: theme.colors.white }}
        >
          <Text
            color={theme.colors.black}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
          >
            Default
          </Text>
        </CustomBgContainer>
        <CustomBgContainer
          onPress={() => toggleCustomBgFilter(customBg.CALM)}
          isSelected={customBgSelected(customBg.CALM)}
          style={{ backgroundColor: theme.colors.calmBg }}
        >
          <Text
            color={theme.colors.calmTxt}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
          >
            Calm
          </Text>
        </CustomBgContainer>
        <CustomBgContainer
          onPress={() => toggleCustomBgFilter(customBg.FOCUS)}
          isSelected={customBgSelected(customBg.FOCUS)}
          style={{ backgroundColor: theme.colors.focusBg }}
        >
          <Text
            color={theme.colors.focusTxt}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
          >
            Focus
          </Text>
        </CustomBgContainer>
      </CustomContainer>
    </View>
  )
}

const CustomContainer = styled.View`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 20px;
`
const CustomBgContainer = styled.Pressable`
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

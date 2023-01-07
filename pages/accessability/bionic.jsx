import React, { useRef, useMemo, useState } from "react";
import styled, { useTheme } from 'styled-components/native'
import { View} from "react-native";
import Text from "../../components/text";
import BionicIcon from "../../components/icons/bionic-icon"
import TextIcon from "../../components/icons/text-icon"
import ThemeIcon from "../../components/icons/theme-icon"
import HelpIcon from "../../components/icons/help-icon"


const custom = {
  BIONIC: 'bionic',
  TEXT: 'text',
  THEME: 'theme'
}

export default function BionicSection() {
  const theme = useTheme()

  const snapPoints = useMemo(() => ["30%", "50%", "100%"], []);
  const sheetRef = useRef(null);
  const [selectedCustom, setSelectedCustom] = useState([])
  
  // custom top select
  function customSelected(custom) {
    return selectedCustom.includes(custom)
  }
  function toggleCustomFilter(custom) {
    if (!customSelected(custom)) {
      setSelectedCustom(selectedCustom => [
        ...selectedCustom,
        custom,
      ])
      return
    }
    setSelectedCustom(selectedCustom =>
      selectedCustom.filter(
        selectedCustom => selectedCustom !== custom
      )
    )
  }

  return (
    <View>
          <CustomContainer>
            <ButtonContainer
              onPress={() => toggleCustomFilter(custom.BIONIC)}
              isSelected={customSelected(custom.BIONIC)}
              >
              <BionicIcon />
              <Text
                color={
                  customSelected(custom.BIONIC)
                  ? theme.colors.white
                  : theme.colors.black
                }
                family={theme.typography.family.bold}
                size={theme.typography.label.sz}
                pl={5}
                >
                Bionic
              </Text>
            </ButtonContainer>
            <ButtonContainer
              onPress={() => toggleCustomFilter(custom.TEXT)}
              isSelected={customSelected(custom.TEXT)}
              >
              <TextIcon />
              <Text
                color={
                  customSelected(custom.TEXT)
                  ? theme.colors.white
                  : theme.colors.black
                }
                family={theme.typography.family.bold}
                size={theme.typography.label.sz}
                pl={5}
                >
                Text
              </Text>
            </ButtonContainer>
            <ButtonContainer
              onPress={() => toggleCustomFilter(custom.THEME)}
              isSelected={customSelected(custom.THEME)}
              >
              <ThemeIcon />
              <Text
                color={
                  customSelected(custom.THEME)
                  ? theme.colors.white
                  : theme.colors.black
                }
                family={theme.typography.family.bold}
                size={theme.typography.label.sz}
                pl={5}
                >
                Theme
              </Text>
            </ButtonContainer>
          </CustomContainer>
          <Text
            color={theme.colors.black}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
            mb={15}
            >
            Fixation
          </Text>
          <HelpIcon />
          <Text
            color={theme.colors.black}
            family={theme.typography.family.bold}
            size={theme.typography.label.sz}
            mb={15}
            >
            Saccade
          </Text>
          <HelpIcon />
    </View>
  );
}

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
  border: 2px solid #E0E0E0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`



import React, { useCallback, useRef, useMemo, useState } from "react";
import styled, { useTheme } from "styled-components/native";
import { StyleSheet, View, Button } from "react-native";
import Text from "../../components/text";
import BottomSheet, {
  BottomSheetView,
  BottomSheetSectionList,
} from "@gorhom/bottom-sheet";

import ThreeButtonToggle from "./try";

import ThemeSection from "./theme";
import BionicSection from "./bionic";
import TextSection from "./text";

import BionicIcon from "../../components/icons/bionic-icon";
import TextIcon from "../../components/icons/text-icon";
import ThemeIcon from "../../components/icons/theme-icon";

import BionicIconActive from "../../components/icons/bionic-icon-active";
import TextIconActive from "../../components/icons/text-icon-active";
import ThemeIconActive from "../../components/icons/theme-icon-active";

// import Slider from "./slider";

const custom = {
  BIONIC: "bionic",
  TEXT: "text",
  THEME: "theme",
};

export default function Button_Sheet() {
  const theme = useTheme();

  const [selectedCustom, setSelectedCustom] = useState([]);

  const [shouldShow, setShouldShow] = useState(true);

  // State of
  
  const [ isBionicActive, setBionicActive] = useState(false);
  const [isTextActive, setTextActive] = useState(false);
  const [ isThemeActive, setThemeActive] = useState(false);

  const handleBionicPress = () => {
    setBionicActive(true);
    setTextActive(false);
    setThemeActive(false);
  };

  const handleTextPress = () => {
    setBionicActive(false);
    setTextActive(true);
    setThemeActive(false);
  };

  const handleThemePress = () => {
    setBionicActive(false);
    setTextActive(false);
    setThemeActive(true);
  };

  
  
  
  // custom top select
  function customSelected(custom) {
    return selectedCustom.includes(custom);
  }
  function toggleCustomFilter(custom) {
    if (!customSelected(custom)) {
      setSelectedCustom((selectedCustom) => [...selectedCustom, custom]);
      return;
    }
    setSelectedCustom((selectedCustom) =>
      selectedCustom.filter((selectedCustom) => selectedCustom !== custom)
    );
  }

  const snapPoints = useMemo(() => ["30%", "50%", "100%"], []);
  const sheetRef = useRef(null);

  const handleSheetChange = useCallback((index) => {
    console.log("handleSheetChange", index);
  }, []);
  const handleSnapPress = useCallback((index) => {
    sheetRef.current?.snapToIndex(index);
  }, []);
  const handleClosePress = useCallback(() => {
    sheetRef.current?.close();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <Button title="Snap To 90%" onPress={() => handleSnapPress(2)} />
      <Button title="Snap To 50%" onPress={() => handleSnapPress(1)} />
      <Button title="Snap To 25%" onPress={() => handleSnapPress(0)} />
      <Button title="Close" onPress={() => handleClosePress()} />
      <BottomSheet
        // style={{ position: 'absolute' }}
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <BottomSheetView>
          <Container>
            <ThreeButtonToggle/>
            <CustomContainer>
              <ButtonContainer
                onPress={() => {
                  toggleCustomFilter(custom.BIONIC);
                  // setShouldShow(!shouldShow);
                  handleBionicPress();
                }}
                isSelected={customSelected(custom.BIONIC)}
              >
                { 
                  isBionicActive ? <BionicIconActive /> : <BionicIcon /> 
                }
                {/* { !isBionicActive && <BionicIcon /> } */}
                <Text
                  color={
                    isBionicActive
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
                onPress={() => {
                  toggleCustomFilter(custom.TEXT);
                  // setShouldShow(!shouldShow);
                  handleTextPress();
                }}
                isSelected={customSelected(custom.TEXT)}
              >
                { isTextActive ?  
                  <TextIconActive /> : <TextIcon />
                  //Here we will return the view when state is true
                  //and will return false if state is false
                }
                {/* {!isTextActive ? <TextIcon /> : null} */}

                <Text
                  color={
                    isTextActive
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
                onPress={() => {
                  toggleCustomFilter(custom.THEME);
                  // setShouldShow(!shouldShow);
                  handleThemePress();
                }}
                isSelected={customSelected(custom.THEME)}
              >
                { isThemeActive ?  
                  <ThemeIconActive /> : <ThemeIcon />
                  //       Here we will return the view when state is true
                  // and will return false if state is false
                }
                {/* {!isThemeActive ? <ThemeIcon /> : null} */}

                <Text
                  color={
                    isThemeActive
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
            { 
              isBionicActive && <BionicSection />
            }
            { 
              isTextActive && <TextSection />
            }
            { 
              isThemeActive && <ThemeSection />
            }
          </Container>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

const Container = styled.View`
  margin: 20px;
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
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`;

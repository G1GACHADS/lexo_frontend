import React, { useCallback, useRef, useMemo, useState } from "react";
import styled, { useTheme } from 'styled-components/native'
import { StyleSheet,View, Button } from "react-native";
import Text from "../../components/text";
import BottomSheet, { BottomSheetView,BottomSheetSectionList } from "@gorhom/bottom-sheet";

import ThemeSection from "./theme";
import BionicSection from "./bionic";
import TextSection from "./text";

import BionicIcon from "../../components/icons/bionic-icon"
import TextIcon from "../../components/icons/text-icon"
import ThemeIcon from "../../components/icons/theme-icon"

import BionicIconActive from "../../components/icons/bionic-icon-active"
import TextIconActive from "../../components/icons/text-icon-active"
import ThemeIconActive from "../../components/icons/theme-icon-active"

import slider from "./slider";

const custom = {
  BIONIC: 'bionic',
  TEXT: 'text',
  THEME: 'theme'
}

export default function Button_Sheet() {
  const theme = useTheme()

  const [selectedCustom, setSelectedCustom] = useState([])

  const [shouldShow, setShouldShow] = useState(true);

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
  
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
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

  const sections = useMemo(
    () =>
      Array(10)
        .fill(0)
        .map((_, index) => ({
          title: `Section ${index}`,
          data: Array(10)
            .fill(0)
            .map((_, index) => `Item ${index}`),
        })),
    []
  );
  // render
  const renderSectionHeader = useCallback(
    ({ section }) => (
      <View style={styles.sectionHeaderContainer}>
        <Text>{section.title}</Text>
      </View>
    ),
    []
  );
  const renderItem = useCallback(
    ({ item }) => (
      <View style={styles.itemContainer}>
        <Text>{item}</Text>
      </View>
    ),
    []
  );
  // console.log(theme.typography.family.bold)
  return (
    <View style={{flex: 1}}>
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
        <CustomContainer>
            <ButtonContainer
              onPress={() => toggleCustomFilter(custom.BIONIC) && setShouldShow(!shouldShow)}
              isSelected={customSelected(custom.BIONIC)}
              >
               { <BionicIcon /> /*Here we will return the view when state is true 
        and will return false if state is false*/}
              {shouldShow ?
              (
                <BionicIconActive />
              ) : null} 
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
              onPress={() => toggleCustomFilter(custom.TEXT)  && setShouldShow(!shouldShow)}
              isSelected={customSelected(custom.TEXT)}
              >
              { <TextIcon /> /*Here we will return the view when state is true 
        and will return false if state is false*/}
              {shouldShow ?
              (
                <TextIconActive />
              ) : null} 
              
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
              onPress={() => toggleCustomFilter(custom.THEME)  && setShouldShow(!shouldShow)}
              isSelected={customSelected(custom.THEME)}
              >
              { <ThemeIcon /> /*Here we will return the view when state is true 
        and will return false if state is false*/}
              {shouldShow ?
              (
                <ThemeIconActive />
              ) : null} 
              
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
          < BionicSection />
          < TextSection />
          < ThemeSection />

          {/* <Text>Awesome 🔥</Text> */}

        </Container>
        </BottomSheetView>
        {/* <BottomSheetView>
          <Text>Awesome 🔥</Text>
          </BottomSheetView>
          <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView> */}
        {/* <BottomSheetSectionList
          sections={sections}
          keyExtractor={(i) => i}
          renderSectionHeader={renderSectionHeader}
          renderItem={renderItem}
          contentContainerStyle={styles.contentContainer}
        /> */}
      </BottomSheet>
    </View>
  );
}
// const styles = StyleSheet.create({
  //   container: {
    //     flex: 1,
    //     paddingTop: 200,
    //   },
    //   contentContainer: {
      //     backgroundColor: "white",
      //   },
//   sectionHeaderContainer: {
//     backgroundColor: "white",
//     padding: 6,
//   },
//   itemContainer: {
//     padding: 6,
//     margin: 6,
//     backgroundColor: "#eee",
//   },
// });
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
  border: 2px solid #E0E0E0;
  background-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.white};
  border-color: ${({ theme, isSelected }) =>
    isSelected ? theme.colors.black : theme.colors.grey1};
  border-radius: 5px;
`



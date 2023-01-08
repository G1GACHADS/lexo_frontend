import React, { useCallback, useRef, useMemo, useState } from "react";
import styled, { useTheme } from 'styled-components/native'
import { StyleSheet,View, Button } from "react-native";
import Text from "../../components/text";
import BottomSheet, { BottomSheetView,BottomSheetSectionList,BottomSheetScrollView  } from "@gorhom/bottom-sheet";

import ThemeSection from "./theme";
import BionicSection from "./bionic";
import TextSection from "./text";

export default function Button_Sheet() {
  const theme = useTheme()

  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const snapPoints = useMemo(() => ["13%","50%"], []);
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
  return (
      <BottomSheet
        // style={{ position: 'absolute' }}
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <BottomSheetScrollView>
        <Container>
          < BionicSection />
          < TextSection />
          < ThemeSection />
        </Container>
        </BottomSheetScrollView>
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



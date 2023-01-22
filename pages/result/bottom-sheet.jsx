import React, { useCallback, useRef, useMemo, useState } from "react";
import { StyleSheet,View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView,BottomSheetSectionList } from "@gorhom/bottom-sheet";

export default function Button_Sheet() {
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
  return (
    <View style={{ flex: 1 }}>
      <BottomSheet
        ref={sheetRef}
        snapPoints={snapPoints}
        initialSnapIndex={0}
        onChange={handleSheetChange}
      >
        <BottomSheetView>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
  },
  contentContainer: {
    backgroundColor: "white",
  },
  sectionHeaderContainer: {
    backgroundColor: "white",
    padding: 6,
  },
  itemContainer: {
    padding: 6,
    margin: 6,
    backgroundColor: "#eee",
  },
});
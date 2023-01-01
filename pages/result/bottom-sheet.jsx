import React, { useCallback, useRef, useMemo,useState } from "react";
import {View, Text, Button } from "react-native";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";

export default function Button_Sheet() {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(false);
  const snapPoints = useMemo(() => ["25%", "50%","100%"], []);
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
    <View style={{ flex:1 }}>
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
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
        <BottomSheetView>
          <Text>Awesome 🔥</Text>
        </BottomSheetView>
      </BottomSheet>
    </View>
  );
}

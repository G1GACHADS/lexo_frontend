import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import Main from "./main";
import BottomSheet from "./bottom-sheet";

export default function Result_Page(){
  return(
    <SafeAreaView style={{ flex:1 }}>
      <Header/>
      <Main/>
      <BottomSheet/>
    </SafeAreaView>
  )
}
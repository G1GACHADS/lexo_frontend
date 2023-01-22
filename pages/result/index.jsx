import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import Main from "./main";
import BottomSheet from "./bottom-sheet";
import Access from "../accessability/index";
import styled from "styled-components";
export default function Result_Page({route,navigation}){
  const onBackPress = () => {
    const {previousScreen} = route.params;
    console.log(previousScreen)
    navigation.navigate(previousScreen||'Home', {
      previousScreen: route.name
    });
  };
  const {result} = route.params;
  console.log(result)
  return(
    <SafeAreaView style={{ flex:1 }}>
      <Container>
        <Header onBackPress={()=>onBackPress()}/>
        <Main content={result}/>
      </Container>
      {/* <BottomSheet/> */}
      <Access style={{ position:'absolute' }}/>
    </SafeAreaView>
  )
}
const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: left;
`
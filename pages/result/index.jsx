import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import Main from "./main";
import BottomSheet from "./bottom-sheet";
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
      <BottomSheet/>
    </SafeAreaView>
  )
}
const Container = styled.View`
  flex: 1;
  margin: 0 10px;
`
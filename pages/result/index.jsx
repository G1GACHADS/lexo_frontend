import { SafeAreaView } from "react-native-safe-area-context";
import Header from "./header";
import Main from "./main";
import BottomSheet from "./bottom-sheet";
import styled from "styled-components";
export default function Result_Page({route,navigation,result}){
  const onBackPress = () => {
    navigation.navigate(previousScreen||'Home', {
      previousScreen: route.name
    });
    console.log(route,navigation)
  };
  console.log(result)
  const result="lorem ipsum dolor sit amet, consectetur adipiscing lorem ipsum dolor. Cum sociis natoque penat"
  return(
    <SafeAreaView style={{ flex:1 }}>
      <Container>
        <Header onBackPress={onBackPress}/>
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
import { Text } from "react-native"
import styled from "styled-components/native"
export default function Main({content}){
  return(
    <ScrollViewContainer>
      {content?<Text>{content}
      <Text>hi</Text>
            <Text style={{ fontWeight:'bold' }}>T </Text>
            <Text style={{ fontWeight:'bold' }}>he </Text>
            <Text>Mouse</Text>
      </Text>
      :<Text>Nothing to show</Text>}
    </ScrollViewContainer>
  )
}
const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 0 auto;
  width: 100%;
`
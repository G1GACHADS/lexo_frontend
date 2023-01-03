import { Text } from "react-native"
import styled from "styled-components/native"
export default function Main({content}){
  return(
    <ScrollViewContainer>
      {content?<Text>{content}</Text>:<Text>Nothing to show</Text>}
    </ScrollViewContainer>
  )
}
const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 0 auto;
  width: 100%;
`
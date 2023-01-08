import { Text, ScrollView,Linking } from "react-native"
import styled from "styled-components/native"
import Markdown from 'react-native-markdown-package';

export default function Main({content}){
  return(
    <ScrollViewContainer contentInsetAdjustmentBehavior="automatic" style={{ flex:1 }}>
      {content?
      <Markdown
        styles={markdownStyle.collectiveMd}
      >
        {content}
      </Markdown>
      :<Text style={{ textAlign:'center',padding:50 }}>
        There is no result
      </Text>}
    </ScrollViewContainer>
  )
}

const ScrollViewContainer = styled.ScrollView`
  flex: 1;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0 10px
`
const markdownStyle = {
  collectiveMd: {
    body:{
      textAlign: 'left',
      color: 'black',
      fontSize: 16,
    }
  }
}
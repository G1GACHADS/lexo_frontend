import { ScrollView,Text } from "react-native"
export default function Main({content}){
  return(
    <ScrollView>
      {content?<Text>{content}</Text>:<Text>Nothing to show</Text>}
    </ScrollView>
  )
}
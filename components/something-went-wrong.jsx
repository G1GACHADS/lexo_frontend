



export default function SomethingWentWrong(){
  return(
    <View>
      <Image source={require("https://via.placeholder.com/350x150")}/>
      <Text>Something went wrong</Text>
      <Text>Try adjust the image or retake the picture.</Text>
      <View style={{ flexDirection:'row' }}>
        <Text>Adjust</Text>
        <Text>Retake</Text>
      </View>
    </View>
  )
}



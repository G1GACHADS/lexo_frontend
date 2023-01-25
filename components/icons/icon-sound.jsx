import * as Speech from 'expo-speech'
import { useState } from 'react'
import { Text, TouchableOpacity } from 'react-native'
import Speaker from '../../assets/global/speaker.svg'
import Stop from '../../assets/global/stop.svg'
import { useTextContentStore } from '../../store/text-content-store'
export default function Icon_Retake(props) {
  const { text, ml } = props
  const [isSpeaking, setIsSpeaking] = useState(false)
  const markdown = useTextContentStore((state) => state.markdown)

  const cleanText = (text) => {
    return text.replace(/\*/g, '')
  }

  const speak = () => {
    if (!isSpeaking) {
      let text = cleanText(markdown)
      //make the language indonesian
      //how to get callback when the Speech is done?
      Speech.speak(text,{language:'id-ID',onDone:function(){setIsSpeaking(false)}})
      setIsSpeaking(true)
    } else {
      Speech.stop()
      setIsSpeaking(false)
    }
  }
  return (
    <TouchableOpacity
      style={{ flexDirection: 'row', alignItems: 'center' }}
      onPress={speak}
    >
      {isSpeaking?<Stop style={{marginRight:5}}/>:<Speaker/>}
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  )
}

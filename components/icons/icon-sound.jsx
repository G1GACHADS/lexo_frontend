import { Text, TouchableOpacity } from 'react-native'
import Speaker from '../../assets/global/speaker.svg'
import { textContent } from '../../store/text-content-store'
import * as Speech from 'expo-speech'
import { useState } from 'react'
export default function Icon_Retake(props) {
  const { text, ml } = props
  const [isSpeaking, setIsSpeaking] = useState(false)
  const markdown = textContent((state) => state.markdown)

  const cleanText = (text) => {
    return text.replace(/\*/g, '')
  }
  const speak = () => {
    if (!isSpeaking) {
      let text = cleanText(markdown)
      Speech.speak(text)
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
      <Speaker />
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  )
}

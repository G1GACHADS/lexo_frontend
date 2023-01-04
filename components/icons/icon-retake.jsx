import {Text,TouchableOpacity} from 'react-native'
import Camera from '../../assets/global/camera.svg'
export default function Icon_Retake({text,onPress}){
  return (
    <TouchableOpacity onPress={onPress}>
      <Camera/>
      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
}

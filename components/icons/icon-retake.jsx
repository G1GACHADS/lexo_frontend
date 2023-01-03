import {Text,TouchableOpacity} from 'react-native'
import Camera from '../../assets/global/camera.svg'
export default function Icon_Retake(props){
  const {text} = props;
  return (
    <TouchableOpacity onPress={()=>props.func()}>
      <Camera/>
      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
}

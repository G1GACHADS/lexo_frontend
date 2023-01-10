import {Text,TouchableOpacity} from 'react-native'
import Done from '../../assets/global/done.svg'
export default function Icon_Done({text,onPress}){
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection:'row',alignItems: 'center'}}>
      <Done/>
      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
}

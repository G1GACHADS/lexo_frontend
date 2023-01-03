import {Text,TouchableOpacity} from 'react-native'
import Back from '../../assets/global/back.svg'
export default function Icon_Back(props){
  const {text,ml} = props;
  return (
    <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}}>
      <Back/>
      {text && <Text style={{ marginLeft:ml }}>{text}</Text>}
    </TouchableOpacity>
  );
}

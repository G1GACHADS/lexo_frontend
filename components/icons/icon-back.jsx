import {Text,TouchableOpacity} from 'react-native'
import Back from '../../assets/global/back.svg'
export default function Icon_Back(props){
  const {name,ml} = props;
  return (
    <TouchableOpacity style={{ flexDirection:'row', alignItems:'center'}}>
      <Back/>
      {name && <Text style={{ marginLeft:ml }}>{name}</Text>}
    </TouchableOpacity>
  );
}

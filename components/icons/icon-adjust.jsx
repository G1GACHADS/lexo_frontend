import {Text,TouchableOpacity} from 'react-native'
import Square from '../../assets/global/square.svg'
export default function Icon_Adjust(props){
  const {name} = props;
  return (
    <TouchableOpacity>
      <Square/>
      {name && <Text>{name}</Text>}
    </TouchableOpacity>
  );
}

import {Text,TouchableOpacity} from 'react-native'
import Done from '../../assets/global/done.svg'
export default function Icon_Done(props){
  const {name} = props;
  return (
    <TouchableOpacity>
      <Done/>
      {name && <Text>{name}</Text>}
    </TouchableOpacity>
  );
}

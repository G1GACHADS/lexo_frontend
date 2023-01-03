import {Text,TouchableOpacity} from 'react-native'
import Done from '../../assets/global/done.svg'
export default function Icon_Done(props){
  const {text} = props;
  return (
    <TouchableOpacity onPress={()=>props.func()}>
      <Done/>
      {text && <Text>{text}</Text>}
    </TouchableOpacity>
  );
}

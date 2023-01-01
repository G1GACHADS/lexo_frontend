import flash_on from '../../components/global/flash_on';
import flash_off from '../../components/global/flash_off';
import { View } from 'react-native';

export default function Flash(props){
  return(
    <View>{props.flash ? flash_on : flash_off}</View>
  )
}
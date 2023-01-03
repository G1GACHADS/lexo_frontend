import { Text, TouchableOpacity } from "react-native";
import Flash_on from "../../assets/homepage/flash-on.svg";
import Flash_off from "../../assets/homepage/flash-off.svg";
export default function Icon_Flash(props) {
  const { on } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      {on && <Flash_on onPress={()=>props.func()}/>}
      {!on && <Flash_off onPress={()=>props.func()}/>}
    </TouchableOpacity>
  );
}

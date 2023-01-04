import { Text, TouchableOpacity } from "react-native";
import Flash_on from "../../assets/homepage/flash-on.svg";
import Flash_off from "../../assets/homepage/flash-off.svg";
export default function Icon_Flash({on,onPress}) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={onPress}>
      {on && <Flash_on onPress={onPress}/>}
      {!on && <Flash_off onPress={onPress}/>}
    </TouchableOpacity>
  );
}

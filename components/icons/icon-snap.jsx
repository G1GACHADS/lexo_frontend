import { Text, TouchableOpacity } from "react-native";
import Snap_default from "../../assets/homepage/snap-button.svg";
import Snap_pressed from "../../assets/homepage/snap-button-pressed.svg";
export default function Icon_Snapshot({on,onPress}) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={onPress}>
      {!on && <Snap_default/>}
      {on && <Snap_pressed/>}
    </TouchableOpacity>
  );
}

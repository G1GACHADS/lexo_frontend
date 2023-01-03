import { Text, TouchableOpacity } from "react-native";
import Snap_default from "../../assets/homepage/snap-button.svg";
import Snap_pressed from "../../assets/homepage/snap-button-pressed.svg";
export default function Icon_Flash(props) {
  const { on } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      {!on && <Snap_default onPress={()=>props.func()}/>}
      {on && <Snap_pressed onPress={()=>props.func()}/>}
    </TouchableOpacity>
  );
}

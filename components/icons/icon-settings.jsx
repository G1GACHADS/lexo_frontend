import { Text, TouchableOpacity } from "react-native";
import Settings from "../../assets/global/settings.svg";
import { toggleSettings } from '../../store/toggle-settings-store'
export default function Icon_Settings(props) {
  const { text,ml} = props;
  const setToggle = toggleSettings(state=>state.setToggle)
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={setToggle}>
      <Settings />
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  );
}

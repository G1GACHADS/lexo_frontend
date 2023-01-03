import { Text, TouchableOpacity } from "react-native";
import Settings from "../../assets/global/settings.svg";
export default function Icon_Settings(props) {
  const { text,ml } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Settings />
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  );
}

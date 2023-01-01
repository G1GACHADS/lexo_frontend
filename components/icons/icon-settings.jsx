import { Text, TouchableOpacity } from "react-native";
import Settings from "../../assets/global/settings.svg";
export default function Icon_Settings(props) {
  const { name,ml } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Settings />
      {name && <Text style={{ marginLeft: ml }}>{name}</Text>}
    </TouchableOpacity>
  );
}

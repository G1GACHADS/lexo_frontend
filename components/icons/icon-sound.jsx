import { Text, TouchableOpacity } from "react-native";
import Speaker from "../../assets/global/speaker.svg";
export default function Icon_Retake(props) {
  const { name,ml } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Speaker />
      {name && <Text style={{ marginLeft: ml }}>{name}</Text>}
    </TouchableOpacity>
  );
}

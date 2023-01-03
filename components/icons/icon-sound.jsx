import { Text, TouchableOpacity } from "react-native";
import Speaker from "../../assets/global/speaker.svg";
export default function Icon_Retake(props) {
  const { text,ml } = props;
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center",marginRight:20\\\\\\\\\\\\\\\\\\\\ }}>
      <Speaker />
      {text && <Text style={{ marginLeft: ml }}>{text}</Text>}
    </TouchableOpacity>
  );
}

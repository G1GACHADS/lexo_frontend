import {TouchableOpacity } from "react-native";
import Media from "../../assets/homepage/media.svg";
export default function Icon_Media({onPress}) {
  return (
    <TouchableOpacity onPress={onPress} style={{ flexDirection: "row", alignItems: "center" }}>
      <Media/>
    </TouchableOpacity>
  );
}

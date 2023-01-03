import {TouchableOpacity } from "react-native";
import Media from "../../assets/homepage/media.svg";
export default function Icon_Media(props) {
  return (
    <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}>
      <Media onPress={()=>props.func()}/>
    </TouchableOpacity>
  );
}

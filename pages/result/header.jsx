import { View, Text } from "react-native";
import Icon_Back from "../../components/icons/icon-back";
import Icon_Sound from "../../components/icons/icon-sound";
import Icon_Settings from "../../components/icons/icon-settings";
export default function Header() {
  return (
    <View style={{ flexDirection:"row" }}>
      <Icon_Back name="Back" ml={10} />
      <View style={{ flexDirection:"row" }}>
        <Icon_Sound name="Sound" ml={10} />
        <Icon_Settings name="Settings" ml={10} />
      </View>
    </View>
  );
}

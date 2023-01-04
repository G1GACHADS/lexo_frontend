import { View, Text } from "react-native";
import Icon_Back from "../../components/icons/icon-back";
import Icon_Sound from "../../components/icons/icon-sound";
import Icon_Settings from "../../components/icons/icon-settings";
import styled from "styled-components/native";
export default function Header({ onBackPress }) {
  return (
    <HeaderView>
      <HorizontalAlign>
        <Icon_Back text="Back" ml={10} onPress={onBackPress}/>
      </HorizontalAlign>
      <HorizontalAlign style={{ flexDirection:"row" }}>
        <Icon_Sound text="Sound" ml={5}/>
        <Icon_Settings text="Settings" ml={5}/>
      </HorizontalAlign>
    </HeaderView>
  );
}
const HeaderView = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin: 5px 0px;
`
const HorizontalAlign = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
`
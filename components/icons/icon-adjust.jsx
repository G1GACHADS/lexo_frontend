import {TouchableOpacity} from 'react-native'
import Square from '../../assets/global/square.svg'
import styled,{useTheme} from 'styled-components';
import Text from "../text";
export default function Icon_Adjust({text,spacing}){
  const theme = useTheme();
  return (
    <TouchableOpacity>
      <AlignHorizontally>
      <Square/>
      <Spacing spacing={spacing}/>
      {text && <Text
       color={theme.colors.black}
       family={theme.typography.family.bold}
       size={theme.typography.label.sz}
       textAlign="center"
       >{text}</Text>}
      </AlignHorizontally>
    </TouchableOpacity>
  );
}
const AlignHorizontally = styled.View`
  display: flex;
  flex-direction: row;
  justify-content:center;
  align-items:center;
`;
const Spacing = styled.View`
  ${props=>props.spacing && `width:${props.spacing}px`}
`
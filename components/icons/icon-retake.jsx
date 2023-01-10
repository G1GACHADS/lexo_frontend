import {TouchableOpacity} from 'react-native'
import Camera from '../../assets/global/camera.svg'
import styled,{useTheme} from 'styled-components';
import Text from "../text";
export default function Icon_Retake({text,onPress,style,spacing}){
  const theme = useTheme();
  return (
    <TouchableOpacity onPress={onPress} style={{ ...style,flexDirection:'row',alignItems: 'center' }}>
      <AlignHorizontally>
      <Camera/>
      <Spacing spacing={spacing}/>
        {text && <Text
        color={theme.colors.white}
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
  padding:10px 15px;
`;
const Spacing = styled.View`
  ${props=>props.spacing && `width:${props.spacing}px`}
`


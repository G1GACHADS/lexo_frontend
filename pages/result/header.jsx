import styled from 'styled-components/native'
import Icon_Back from '../../components/icons/icon-back'
import Icon_Settings from '../../components/icons/icon-settings'
import Icon_Sound from '../../components/icons/icon-sound'

export default function Header({ onBackPress }) {
  return (
    <HeaderView>
      <HorizontalAlign>
        <Icon_Back text="Kembali" ml={7} onPress={onBackPress} />
      </HorizontalAlign>
      <HorizontalAlign style={{ flexDirection: 'row' }}>
        <Icon_Sound text="Suara" ml={7} />
        <Margin px={10} />
        <Icon_Settings text="Pengaturan" ml={7} />
      </HorizontalAlign>
    </HeaderView>
  )
}

const HeaderView = styled.View`
  flex-direction: row;
  margin: 10px 10px 2px 10px;
  justify-content: space-between;
  // background-color: green;
`

const HorizontalAlign = styled.View`
  flex-direction: row;
  background-color: #fff;
  border-radius: 10px;
  padding: 5px 10px;
`

const Margin = styled.View`
  width: ${(props) => props.px}px;
`

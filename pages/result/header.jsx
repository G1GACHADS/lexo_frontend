import styled from 'styled-components/native'
import Icon_Back from '../../components/icons/icon-back'
import Icon_Settings from '../../components/icons/icon-settings'
import Icon_Sound from '../../components/icons/icon-sound'

export default function Header({ onBackPress }) {
  return (
    <HeaderView>
      <HorizontalAlign>
        <Icon_Back text="Back" ml={7} onPress={onBackPress} />
      </HorizontalAlign>
      <HorizontalAlign style={{ flexDirection: 'row' }}>
        <Icon_Sound ml={7} />
        <Margin px={25} />
        <Icon_Settings ml={7} />
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
  border: 4px solid ${({ theme }) => theme.colors.grey1};
  border-radius: 50px;
  padding: 5px 10px;
`

const Margin = styled.View`
  width: ${(props) => props.px}px;
`

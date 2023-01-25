import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'
import { toggleSettings } from '../../store/toggle-settings-store'
import Access from '../accessability/index'
import Header from './header'
import Main from './main'
export default function ResultPage({ route, navigation }) {
  const toggleOn = toggleSettings((state) => state.toggleOn)
  const onBackPress = () => {
    const { previousScreen } = route.params
    navigation.navigate(previousScreen || 'Home', {
      previousScreen: route.name,
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header onBackPress={() => onBackPress()} />
        <Main />
      </Container>
      {toggleOn && <Access />}
    </SafeAreaView>
  )
}

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: left;
`

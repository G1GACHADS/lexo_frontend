import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'
import Access from '../accessability/index'
import Header from './header'
import Main from './main'

export default function ResultPage({ route, navigation }) {
  const onBackPress = () => {
    const { previousScreen } = route.params
    console.log(previousScreen)
    navigation.navigate(previousScreen || 'Home', {
      previousScreen: route.name,
    })
  }

  const { result } = route.params
  console.log(result)
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header onBackPress={() => onBackPress()} />
        <Main content={result} />
      </Container>
      <Access style={{ position: 'absolute' }} />
    </SafeAreaView>
  )
}

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: left;
`

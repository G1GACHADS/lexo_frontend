import { SafeAreaView } from 'react-native-safe-area-context'
import styled from 'styled-components'
import Access from '../accessability/index'
import Header from './header'
import Main from './main'
import { useState, useCallback,useEffect } from 'react'
export default function ResultPage({ route, navigation }) {
  const [settingsOn, setSettingsOn] = useState(false)

  const onBackPress = () => {
    const { previousScreen } = route.params
    navigation.navigate(previousScreen || 'Home', {
      previousScreen: route.name,
    })
  }

  const toggleSettings = () => {
    try {
      setSettingsOn(!settingsOn)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header
          onBackPress={() => onBackPress()}
          toggleSettings={() => toggleSettings()}
        />
        <Main/>
      </Container>
      {settingsOn && <Access/>}
    </SafeAreaView>
  )
}

const Container = styled.View`
  flex: 1;
  height: 100%;
  width: 100%;
  text-align: left;
`

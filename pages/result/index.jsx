import { useFocusEffect } from '@react-navigation/native'
import { useCallback } from 'react'
import { SafeAreaView } from 'react-native'
import styled from 'styled-components'
import { useReadingThemeStore } from '../../store/reading-theme-store'
import { toggleSettings } from '../../store/toggle-settings-store'
import Access from '../accessability/index'
import Header from './header'
import Main from './main'

export default function ResultPage({ route, navigation }) {
  const toggleOn = toggleSettings((state) => state.toggleOn)

  const readingTheme = useReadingThemeStore((state) => state.readingTheme)

  // Change background color dynamically following the readingTheme state
  useFocusEffect(
    useCallback(() => {
      navigation.setOptions({
        contentStyle: {
          backgroundColor: readingTheme.bg,
        },
      })
    })
  )

  const onBackPress = () => {
    const { previousScreen } = route.params
    navigation.navigate(previousScreen || 'Home', {
      previousScreen: route.name,
    })
  }

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Container>
        <Header onBackPress={onBackPress} />
        <Main />
      </Container>
      {toggleOn && <Access />}
    </SafeAreaView>
  )
}

const Container = styled.View`
  height: 100%;
  width: 100%;
`

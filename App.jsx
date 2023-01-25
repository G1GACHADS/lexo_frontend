import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { useFonts } from 'expo-font'
import * as SplashScreen from 'expo-splash-screen'
import React, { useCallback } from 'react'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { ThemeProvider } from 'styled-components/native'
import Access from './pages/accessability'
import Home from './pages/home'
import Result from './pages/result'
import theme from './theme'

import { LogBox } from 'react-native'

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
])

export default function App() {
  const Stack = createNativeStackNavigator()
  const [fontsLoaded] = useFonts({
    'Jakarta-m': require('./assets/fonts/PlusJakartaSans-Medium.ttf'),
    'Jakarta-sb': require('./assets/fonts/PlusJakartaSans-SemiBold.ttf'),
    'Jakarta-b': require('./assets/fonts/PlusJakartaSans-Bold.ttf'),
    'RobotoSerif-m': require('./assets/fonts/RobotoSerif-Medium.ttf'),
    'RobotoSerif-sb': require('./assets/fonts/RobotoSerif-SemiBold.ttf'),
    'RobotoSerif-b': require('./assets/fonts/RobotoSerif-Bold.ttf'),
    'PTSerif-r': require('./assets/fonts/PTSerif-Regular.ttf'),
    'PTSerif-b': require('./assets/fonts/PTSerif-Bold.ttf'),
    'Inter-m': require('./assets/fonts/Inter-Medium.ttf'),
    'Inter-sb': require('./assets/fonts/Inter-SemiBold.ttf'),
    'Inter-b': require('./assets/fonts/Inter-Bold.ttf'),
  })
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  console.log('font loaded')
  console.log(theme)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onLayout={onLayoutRootView}>
        <ThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen
              name="Home"
              component={Home}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Result"
              component={Result}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="Access"
              component={Access}
              options={{ headerShown: false }}
            />
          </Stack.Navigator>
        </ThemeProvider>
      </NavigationContainer>
    </GestureHandlerRootView>
  )
}

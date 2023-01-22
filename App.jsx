import React, { useCallback } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "styled-components/native";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import Home from "./pages/home";
import Result from "./pages/result";
import Access from "./pages/accessability";
import theme from "./theme";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  'Non-serializable values were found in the navigation state',
]);

export default function App() {
  const Stack = createNativeStackNavigator();
  const [fontsLoaded] = useFonts({
    "Jakarta-m": require("./assets/fonts/PlusJakartaSans-Medium.ttf"),
    "Jakarta-sb": require("./assets/fonts/PlusJakartaSans-SemiBold.ttf"),
    "Jakarta-b": require("./assets/fonts/PlusJakartaSans-Bold.ttf"),
  });
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }
  console.log("font loaded");
  console.log(theme)
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <NavigationContainer onLayout={onLayoutRootView}>
        <ThemeProvider theme={theme}>
          <Stack.Navigator initialRouteName="Access">
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
  );
}

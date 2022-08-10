import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Register from "./Pages/Register"

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
      initialRouteName="Login"
      >
        <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
        // options={{ title: '' }}
        />
        <Stack.Screen
        name="Login"
        component={Login}
        options={{headerShown: false}}
        />
        <Stack.Screen
        name="Register"
        component={Register}
        options={{headerShown: false}}
        />

      </Stack.Navigator>
    </NavigationContainer>
  );
}

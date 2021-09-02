import React from 'react'

import { createStackNavigator } from '@react-navigation/stack'
import { useScreenOptions } from '../hooks'

// ** Pantallas

import {
  HomeScreen,
  ShopScreen
} from '../screens'

const Stack = createStackNavigator()

export default () => {
  const screenOptions = useScreenOptions()
  return (
    <Stack.Navigator screenOptions={screenOptions.stack}>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={screenOptions.home}
      />
      <Stack.Screen
        name="Shop"
        component={ShopScreen}
      />
    </Stack.Navigator>
  )
}

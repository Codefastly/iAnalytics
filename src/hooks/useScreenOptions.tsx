import React from 'react'

import { StackHeaderOptions } from '@react-navigation/stack/lib/typescript/src/types'

import { Button, Text } from 'react-native'

import { StackActions } from '@react-navigation/routers'
import { useNavigation } from '@react-navigation/native'

export default () => {
  const navigation = useNavigation()

  const menu = {
    headerStyle: {
      elevation: 0
    },
    headerTitleAlign: 'center',
    headerTitleContainerStyle: { marginLeft: 0 },
    headerLeftContainerStyle: { paddingLeft: 10 },
    headerRightContainerStyle: { paddingRight: 10 },
    headerLeft: () => (
        <Button onPress={() => navigation.dispatch(StackActions.pop())} title="Back" />
    ),
    headerRight: () => null
  } as StackHeaderOptions

  const options = {
    stack: menu,
    home: {
      ...menu,
      headerLeft: () => (
        <Text>Settings</Text>
      ),
      headerRight: () => (
        <Button onPress={() => navigation.dispatch(StackActions.push('Shop'))} title="Shop"/>
      ),
      title: 'iAnalytics',
      headerShown: true,
      headerTransparent: true
    },
    invisible: {
      headerShown: false
    }
  }

  return options
}

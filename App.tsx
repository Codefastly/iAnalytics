import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

// ** Navegación

import { HomeScreen } from './src/screens'

export default function App () {
  return (
    <View style={styles.container}>
      <Text>Buenos días</Text>
      <HomeScreen />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  }
})

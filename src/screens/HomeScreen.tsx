import React from 'react'
import { SafeAreaView, StyleSheet, Text } from 'react-native'

import { colors } from '../constants'

export default () => {
  return (
        <SafeAreaView style={styles.container}>
            <Text style={{ color: colors.pink[700] }}>
              I am HomeScreen
            </Text>
        </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 90
  }
})

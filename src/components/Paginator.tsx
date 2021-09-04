import React, { useRef } from 'react'
import { Button, StyleSheet, Text, View, Animated } from 'react-native'
import { responsiveWidth } from 'react-native-responsive-dimensions'

export default ({ data, scrollX }: {data: any[], scrollX: any}) => {
  const width = responsiveWidth(100)

  return (
        <View style={{ flexDirection: 'row', height: 64 }}>
            { data.map((_: any, i: number) => {
              const inputRange = [(i - 1) * width, i * width, (i + 1) * width]
              const dotWith = parseFloat(JSON.stringify(scrollX.interpolate({
                inputRange,
                outputRange: [10, 30, 10],
                extrapolate: 'clamp'
              })))
              const opacity = parseFloat(JSON.stringify(scrollX.interpolate({
                inputRange,
                outputRange: [0.3, 1, 0.3],
                extrapolate: 'clamp'
              })))
              return <Animated.View key={i.toString()} style={[styles.dot, { width: dotWith, opacity }]} />
            })}
        </View>
  )
}

const styles = StyleSheet.create({
  dot: {
    height: 10,
    borderRadius: 5,
    backgroundColor: '#493d8a',
    marginHorizontal: 8
  }
})

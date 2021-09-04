import React, { useRef, useState } from 'react'
import { StyleSheet, View, SafeAreaView, Animated } from 'react-native'
import { FlatList } from 'react-native-gesture-handler'
import { NextButton, OnBoardingItem, Paginator } from '../components'
const slides = [
  {
    id: '1',
    title: 'Quick & Easy Payments',
    description: 'Grow your business by accepting card payments with the new cards..',
    image: require('../../assets/onboarding.png')
  },
  {
    id: '2',
    title: 'Second title',
    description: 'Grow your business by accepting card payments with the new cards..',
    image: require('../../assets/onboarding.png')
  },
  {
    id: '3',
    title: 'Third title',
    description: 'Grow your business by accepting card payments with the new cards..',
    image: require('../../assets/onboarding.png')
  },
  {
    id: '4',
    title: 'Fourth title ',
    description: 'Grow your business by accepting card payments with the new cards..',
    image: require('../../assets/onboarding.png')
  }
]

export default () => {
  const [currentIndex, setCurremtIndex] = useState(0)

  const slidesRef = useRef(null)

  const scrollX = useRef(new Animated.Value(0)).current

  const viewableItemsChanged = useRef(({ viewableItems }: any) => {
    setCurremtIndex(viewableItems[0].index)
  }).current

  const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current

  return (
    <View style={styles.container}>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <FlatList
              data={slides}
              renderItem={OnBoardingItem}
              keyExtractor={(item) => item.id}
              horizontal
              showsHorizontalScrollIndicator={false}
              pagingEnabled
              bounces={false}
              onScroll={Animated.event(
                [{
                  nativeEvent: {
                    contentOffset: {
                      x: scrollX
                    }
                  }
                }], {
                  useNativeDriver: false
                }
              )}
              scrollEventThrottle={0}
              onViewableItemsChanged={viewableItemsChanged}
              viewabilityConfig={viewConfig}
              ref={slidesRef}
          />
          <Paginator data={slides} scrollX={scrollX} />
          <NextButton />
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    bottom: 30
  }
})

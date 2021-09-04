import React from 'react'
import { Text, View } from 'react-native'

import Svg, { G, Circle } from 'react-native-svg'

export default () => {
  const size = 128
  const strokeWidth = 2
  const center = size / 2
  const radius = size / 2 - strokeWidth / 2
  const circumference = 2 * Math.PI * radius
  return (
        <View>
            <Svg width={size} height={size}>
                <Circle stroke="#E6E7E8" cx={center} cy={center} r={radius} strokeWidth={strokeWidth} />
                <Circle
                    stroke="#F4348F"
                    cx={center}
                    cy={center}
                    r={radius}
                    strokeWidth={strokeWidth}
                    strokeDasharray={circumference}
                    strokeDashoffset={circumference - (circumference * 25) / 100}
                />
            </Svg>
        </View>
  )
}

import React from 'react'

// ** Navigation
import { NavigationContainer } from '@react-navigation/native'

// ** Componentes
import Screens from './Screens'

export default () => {
  return (
        <NavigationContainer>
            <Screens />
        </NavigationContainer>
  )
}

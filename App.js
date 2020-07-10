import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppState } from './src/context/AppState'
import { StackNavigator } from './src/navigation/AppNavigation'

export default App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <StackNavigator />
      </NavigationContainer>
    </AppState>
  )
}

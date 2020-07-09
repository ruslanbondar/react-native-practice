import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { AppState } from './src/context/AppState'
import { AppTabs } from './src/navigation/AppNavigation'

export default App = () => {
  return (
    <AppState>
      <NavigationContainer>
        <AppTabs />
      </NavigationContainer>
    </AppState>
  )
}

import React from 'react'
import { ItemListContainer } from './src/components/ItemListContainer'
import { AppState } from './src/context/AppState'

export default App = () => {
  return (
    <AppState>
      <ItemListContainer />
    </AppState>
  )
}

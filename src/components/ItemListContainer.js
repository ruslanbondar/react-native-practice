import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ItemList } from './ItemList'
import { AppContext } from '../context/createContext'

export const ItemListContainer = () => {
  const { storeData } = useContext(AppContext)

  useEffect(() => {
    storeData()
  }, [])

  return (
    <View style={styles.container}>
      <ItemList />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
})

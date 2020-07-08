import React, { useEffect, useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { ItemList } from './ItemList'
import { AppContext } from '../context/createContext'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

export const ItemListContainer = () => {
  const { items, addItem, deleteItem, updateItem, storeData } = useContext(
    AppContext
  )

  useEffect(() => {
    storeData()
  }, [])

  return (
    <View style={styles.container}>
      <ItemList
        items={items}
        deleteItem={deleteItem}
        updateItem={updateItem}
        addItem={addItem}
      />
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

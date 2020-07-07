import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { ItemList } from './ItemList'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

export const ItemListContainer = () => {
  const [items, setItems] = useState()

  const storeData = async () => {
    const res = await axios.get(url)
    const jsonValue = JSON.stringify(res.data)
    await AsyncStorage.setItem('photoItems', jsonValue)

    let data = await AsyncStorage.getItem('photoItems')
    data = JSON.parse(data)
    setItems(data)
  }

  useEffect(() => {
    storeData()
  }, [])

  const addItem = (title, url) => {
    setItems((prev) => [
      ...prev,
      {
        id: Date.now().toString(),
        title,
        url,
      },
    ])
  }

  return (
    <View style={styles.container}>
      <ItemList items={items} setItems={setItems} addItem={addItem} />
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

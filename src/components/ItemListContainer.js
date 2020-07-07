import React, { useEffect, useState } from 'react'
import { StyleSheet, View } from 'react-native'
import axios from 'axios'
import { ItemList } from './ItemList'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

export const ItemListContainer = () => {
  const [items, setItems] = useState()

  const getPhotos = async () => {
    const res = await axios.get(url)
    setItems(res.data)
  }

  useEffect(() => {
    getPhotos()
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

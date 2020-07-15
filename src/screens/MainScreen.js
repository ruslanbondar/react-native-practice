import React, { useEffect, useContext, useCallback } from 'react'
import { StyleSheet, View } from 'react-native'
import { ItemList } from '../components/ItemList'
import { AppContext } from '../context/createContext'

export const MainScreen = ({ navigation }) => {
  const { storeData } = useContext(AppContext)

  const loadData = useCallback(async () => await storeData(), [storeData])

  useEffect(() => {
    loadData()
  }, [])

  return (
    <View style={styles.container}>
      <ItemList navigation={navigation} />
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

import React, { useEffect, useContext, useCallback } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { Card, Button } from 'react-native-elements'
import { Slider } from '../components/Slider'
import { AppContext } from '../context/createContext'

export const SliderScreen = () => {
  const { storeSliderData, sliderItems } = useContext(AppContext)

  const loadData = useCallback(async () => await storeSliderData(), [
    storeSliderData,
  ])

  useEffect(() => {
    loadData()
  }, [])

  const renderCard = (item) => {
    return (
      <Card key={item.id} image={{ uri: item.url }}>
        <View style={{ height: 60 }}>
          <Text>{item.title}</Text>
        </View>
        <Button icon={{ name: 'code' }} title="View now" />
      </Card>
    )
  }

  return (
    <View style={styles.container}>
      <Slider data={sliderItems} renderCard={renderCard} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
})

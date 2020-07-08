import React, { useState, useContext } from 'react'
import { FlatList, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Item } from './Item'
import { CustomButton } from './common/CustomButton'
import { AddModal } from './AddModal'
import { AppContext } from '../context/createContext'

export const ItemList = () => {
  const { items } = useContext(AppContext)

  const [open, setOpen] = useState(false)

  return (
    <>
      <AddModal open={open} setOpen={setOpen} />

      <CustomButton color="#3949ab" onPress={() => setOpen(true)}>
        <MaterialIcons name="add-a-photo" size={20} />
      </CustomButton>

      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => {
            return <Item item={item} />
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
        />
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  list: {
    paddingTop: 10,
    paddingBottom: 70,
  },
})

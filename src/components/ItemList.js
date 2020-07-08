import React, { useState } from 'react'
import { FlatList, Alert, View, StyleSheet } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'
import { Item } from './Item'
import { CustomButton } from './common/CustomButton'
import { AddModal } from './AddModal'

export const ItemList = ({ items, deleteItem, updateItem, addItem }) => {
  const [open, setOpen] = useState(false)

  // const deleteItem = (id) => {
  //   Alert.alert(
  //     'Deleting todo',
  //     'Are you sure?',
  //     [
  //       {
  //         text: 'Cancel',
  //         style: 'cancel',
  //       },
  //       {
  //         text: 'Delete',
  //         onPress: () => {
  //           setItems((prev) => prev.filter((item) => item.id !== id))
  //         },
  //       },
  //     ],
  //     { cancelable: false }
  //   )
  // }

  return (
    <>
      <AddModal open={open} setOpen={setOpen} onSubmit={addItem} />

      <CustomButton color="#3949ab" onPress={() => setOpen(true)}>
        <MaterialIcons name="add-a-photo" size={20} />
      </CustomButton>

      <View style={styles.list}>
        <FlatList
          data={items}
          renderItem={({ item, index }) => {
            return (
              <Item item={item} onDelete={deleteItem} onSave={updateItem} />
            )
          }}
          numColumns={2}
          keyExtractor={(item) => item.id.toString()}
          // inverted={true}
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

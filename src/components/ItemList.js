import React from 'react'
import { FlatList, Alert } from 'react-native'
import { Item } from './Item'
import { CustomButton } from './common/CustomButton'

export const ItemList = ({ items, setItems }) => {
  const deleteItem = (id) => {
    Alert.alert(
      'Deleting todo',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => {
            setItems((prev) => prev.filter((item) => item.id !== id))
          },
        },
      ],
      { cancelable: false }
    )
  }

  return (
    <>
      <CustomButton color="#3949ab">Add Photo</CustomButton>

      <FlatList
        data={items}
        renderItem={({ item, index }) => {
          return <Item item={item} onDelete={deleteItem} />
        }}
        numColumns={2}
        keyExtractor={(item) => item.id.toString()}
        key={(item) => item.id}
      />
    </>
  )
}

import React, { useState } from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'
import { EditModal } from './EditModal'

export const Item = ({ item, onDelete, onSave }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <TouchableOpacity style={styles.touchable} onPress={() => setOpen(true)}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.img}
            source={{
              uri: item.url,
            }}
          />

          <Text style={styles.text}>{item.title}</Text>
        </View>
      </TouchableOpacity>

      <EditModal
        open={open}
        setOpen={setOpen}
        onDelete={onDelete}
        onSave={onSave}
        id={item.id}
        title={item.title}
        url={item.url}
      />
    </>
  )
}

const styles = StyleSheet.create({
  imgContainer: {
    width: '100%',
    padding: 5,
    height: 200,
  },
  img: {
    width: '100%',
    height: 150,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
  touchable: {
    width: '50%',
    marginBottom: 20,
  },
})

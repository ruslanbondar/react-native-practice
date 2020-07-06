import React from 'react'
import { Modal, StyleSheet, View, Text, Image } from 'react-native'
import { CustomButton } from './common/CustomButton'

export const EditModal = ({ open, setOpen, onDelete, id, title, url }) => {
  return (
    <Modal animationType="fade" visible={open} transparent={true}>
      <View
        style={{
          ...styles.wrapper,
          backgroundColor: open && 'rgba(0,0,0,0.6)',
        }}
      >
        <View style={styles.modal}>
          <View style={styles.imgContainer}>
            <Image
              style={styles.img}
              source={{
                uri: url,
              }}
            />

            <Text style={styles.text}>{title}</Text>
          </View>

          <View style={styles.buttonWrapper}>
            <CustomButton color="#3949ab" onPress={() => setOpen(false)}>
              Close
            </CustomButton>

            <CustomButton color="#e53935" onPress={() => onDelete(id)}>
              Delete
            </CustomButton>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modal: {
    width: 350,
    height: 350,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-between',
    elevation: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
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
    fontSize: 12,
  },
})

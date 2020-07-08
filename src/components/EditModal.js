import React, { useState, useContext } from 'react'
import {
  Modal,
  StyleSheet,
  View,
  Text,
  Image,
  TextInput,
  Alert,
} from 'react-native'
import { CustomButton } from './common/CustomButton'
import { AntDesign } from '@expo/vector-icons'
import { AppContext } from '../context/createContext'

export const EditModal = ({ open, setOpen, id, title, url }) => {
  const { updateItem, deleteItem } = useContext(AppContext)

  const [edit, setEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const saveHandler = (title) => {
    updateItem(id, title)
    setOpen(false)
    setEdit(false)
  }

  const deleteHandler = (id) => {
    Alert.alert(
      'Deleting item',
      'Are you sure?',
      [
        {
          text: 'Cancel',
          style: 'cancel',
        },
        {
          text: 'Delete',
          onPress: () => deleteItem(id),
        },
      ],
      { cancelable: false }
    )
  }

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

            {edit ? (
              <View style={styles.editContainer}>
                <TextInput
                  style={styles.editInput}
                  value={newTitle}
                  onChangeText={setNewTitle}
                />
                <CustomButton
                  color="lightgreen"
                  onPress={() => saveHandler(newTitle)}
                >
                  <AntDesign name="save" size={20} />
                </CustomButton>
              </View>
            ) : (
              <Text style={styles.text}>{title}</Text>
            )}
          </View>

          <View style={styles.buttonWrapper}>
            <CustomButton color="#3949ab" onPress={() => setOpen(false)}>
              <AntDesign name="close" size={20} />
            </CustomButton>

            <CustomButton color="lightblue" onPress={() => setEdit(true)}>
              <AntDesign name="edit" size={20} />
            </CustomButton>

            <CustomButton color="#e53935" onPress={() => deleteHandler(id)}>
              <AntDesign name="delete" size={20} />
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
    minHeight: 370,
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
    minHeight: 240,
  },
  img: {
    width: '100%',
    height: 220,
  },
  text: {
    textAlign: 'center',
    fontSize: 14,
  },
  editContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  editInput: {
    width: '60%',
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})

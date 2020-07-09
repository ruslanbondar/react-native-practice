import React, { useState, useContext } from 'react'
import {
  Modal,
  StyleSheet,
  View,
  TextInput,
  Keyboard,
  Alert,
} from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { CustomButton } from './common/CustomButton'
import { ImgPicker } from './ImgPicker'
import { AppContext } from '../context/createContext'

export const AddModal = ({ open, setOpen }) => {
  const { addItem } = useContext(AppContext)

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const pressHandler = () => {
    if (title.trim()) {
      addItem(title, url)
      setOpen(false)
      setTitle('')
      setUrl('')
      Keyboard.dismiss()
    } else {
      Alert.alert('Title should not be empty')
    }
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
          <TextInput
            style={styles.input}
            onChangeText={setTitle}
            value={title}
            placeholder="Enter title..."
          />
          <ImgPicker url={url} setUrl={setUrl} />

          <View style={styles.buttonWrapper}>
            <CustomButton color="#3949ab" onPress={() => setOpen(false)}>
              <AntDesign name="close" size={20} />
            </CustomButton>

            <CustomButton color="lightgreen" onPress={pressHandler}>
              <AntDesign name="save" size={20} />
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
    height: 450,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 25,
    justifyContent: 'space-between',
    elevation: 5,
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})

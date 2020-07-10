import React, { useState, useContext } from 'react'
import { StyleSheet, View, TextInput, Keyboard, Alert } from 'react-native'
import { AntDesign } from '@expo/vector-icons'

import { CustomButton } from '../components/common/CustomButton'
import { ImgPicker } from '../components/ImgPicker'
import { AppContext } from '../context/createContext'

export const AddItemScreen = ({ navigation }) => {
  const { addItem } = useContext(AppContext)

  const [title, setTitle] = useState('')
  const [url, setUrl] = useState('')

  const pressHandler = () => {
    if (title.trim()) {
      addItem(title, url)
      setTitle('')
      setUrl('')
      navigation.goBack()
      Keyboard.dismiss()
    } else {
      Alert.alert('Title should not be empty')
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <TextInput
          style={styles.input}
          onChangeText={setTitle}
          value={title}
          placeholder="Enter title..."
        />
        <ImgPicker url={url} setUrl={setUrl} />

        <View style={styles.buttonWrapper}>
          <CustomButton color="#3949ab" onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={20} />
          </CustomButton>

          <CustomButton color="lightgreen" onPress={pressHandler}>
            <AntDesign name="save" size={20} />
          </CustomButton>
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  content: {
    width: 350,
    height: 450,
    marginVertical: 20,
    paddingVertical: 25,
    justifyContent: 'space-between',
  },
  buttonWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
  },
  input: {
    borderBottomWidth: 2,
    borderBottomColor: '#3949ab',
  },
})

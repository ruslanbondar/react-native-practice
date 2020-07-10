import React, { useState, useContext } from 'react'
import {
  StyleSheet,
  View,
  Text,
  TextInput,
  Alert,
  Animated,
} from 'react-native'
import { PinchGestureHandler, State } from 'react-native-gesture-handler'
import { CustomButton } from '../components/common/CustomButton'
import { AntDesign } from '@expo/vector-icons'
import { AppContext } from '../context/createContext'

export const EditItemScreen = ({ route, navigation }) => {
  const { updateItem, deleteItem } = useContext(AppContext)

  const { id, title, url } = route.params

  const [edit, setEdit] = useState(false)
  const [newTitle, setNewTitle] = useState(title)

  const saveHandler = (title) => {
    updateItem(id, title)
    navigation.goBack()
    setEdit(false)
  }

  const deleteAndGoBack = (id) => {
    deleteItem(id)
    navigation.goBack()
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
          onPress: () => deleteAndGoBack(id),
        },
      ],
      { cancelable: false }
    )
  }

  const scale = new Animated.Value(1)

  const onZoomEvent = Animated.event(
    [
      {
        nativeEvent: { scale },
      },
    ],
    {
      useNativeDriver: true,
    }
  )

  const onZoomStateChange = (event) => {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      Animated.spring(scale, {
        toValue: 1,
        useNativeDriver: true,
      }).start()
    }
  }

  return (
    <View style={styles.wrapper}>
      <View style={styles.content}>
        <View style={styles.imgContainer}>
          <PinchGestureHandler
            onGestureEvent={onZoomEvent}
            onHandlerStateChange={onZoomStateChange}
          >
            <Animated.Image
              source={{
                uri: url,
              }}
              style={{ ...styles.img, transform: [{ scale }] }}
              resizeMode="contain"
            />
          </PinchGestureHandler>

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
          <CustomButton color="#3949ab" onPress={() => navigation.goBack()}>
            <AntDesign name="back" size={20} />
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
    minHeight: 370,
    marginVertical: 20,
    paddingVertical: 25,
    justifyContent: 'space-between',
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
    zIndex: 100,
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

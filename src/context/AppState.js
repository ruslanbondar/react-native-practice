import React, { useReducer } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { AppContext } from './createContext'
import { appReducer } from './appReducer'
import {
  ADD_ITEM,
  DELETE_ITEM,
  UPDATE_ITEM,
  SET_ITEMS,
  SET_SLIDER_ITEMS,
  SET_TOKEN,
} from './types'

const url = 'https://jsonplaceholder.typicode.com/photos'

export const AppState = ({ children }) => {
  const initialState = {
    items: [],
    sliderItems: [],
    token: null,
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addItem = (title, url) => {
    dispatch({ type: ADD_ITEM, title, url })
  }

  const deleteItem = (id) => dispatch({ type: DELETE_ITEM, id })

  const updateItem = (id, title) => dispatch({ type: UPDATE_ITEM, id, title })

  const storeData = async () => {
    const res = await axios.get(`${url}?_limit=10`)
    const jsonValue = JSON.stringify(res.data)
    await AsyncStorage.setItem('photoItems', jsonValue)

    let data = await AsyncStorage.getItem('photoItems')
    data = JSON.parse(data)
    dispatch({ type: SET_ITEMS, data })
  }

  const storeSliderData = async () => {
    const res = await axios.get(`${url}?_limit=5`)
    const jsonValue = JSON.stringify(res.data)
    await AsyncStorage.setItem('sliderItems', jsonValue)

    let data = await AsyncStorage.getItem('sliderItems')
    data = JSON.parse(data)
    dispatch({ type: SET_SLIDER_ITEMS, data })
  }

  const setToken = (token) => dispatch({ type: SET_TOKEN, token })

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        sliderItems: state.sliderItems,
        token: state.token,
        addItem,
        deleteItem,
        updateItem,
        storeData,
        storeSliderData,
        setToken,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

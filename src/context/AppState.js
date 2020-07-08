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
  LOAD_MORE,
} from './types'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'

export const AppState = ({ children }) => {
  const initialState = {
    items: [],
  }

  const [state, dispatch] = useReducer(appReducer, initialState)

  const addItem = (title, url) => {
    dispatch({ type: ADD_ITEM, title, url })
  }

  const deleteItem = (id) => dispatch({ type: DELETE_ITEM, id })

  const updateItem = (id, title) => dispatch({ type: UPDATE_ITEM, id, title })

  const storeData = async () => {
    const res = await axios.get(url)
    const jsonValue = JSON.stringify(res.data)
    await AsyncStorage.setItem('photoItems', jsonValue)

    let data = await AsyncStorage.getItem('photoItems')
    data = JSON.parse(data)
    dispatch({ type: SET_ITEMS, data })
  }

  const getMoreItems = async () => {
    const result = await axios.get(
      `https://jsonplaceholder.typicode.com/photos?_limit=20`
    )
    dispatch({ type: LOAD_MORE, data: result.data })
  }

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        addItem,
        deleteItem,
        updateItem,
        storeData,
        getMoreItems,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

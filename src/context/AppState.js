import React, { useReducer } from 'react'
import AsyncStorage from '@react-native-community/async-storage'
import axios from 'axios'
import { AppContext } from './createContext'
import { appReducer } from './appReducer'
import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, SET_ITEMS } from './types'

const url = 'https://jsonplaceholder.typicode.com/photos?_limit=10'
// const testItem = [
//   {
//     id: 1,
//     title: 'test title',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
//   {
//     id: 2,
//     title: 'test title 2',
//     url: 'https://via.placeholder.com/600/92c952',
//   },
// ]

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

  return (
    <AppContext.Provider
      value={{
        items: state.items,
        addItem,
        deleteItem,
        updateItem,
        storeData,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

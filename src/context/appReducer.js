import { ADD_ITEM, DELETE_ITEM, UPDATE_ITEM, SET_ITEMS } from './types'

const handlers = {
  [ADD_ITEM]: (state, { title, url }) => ({
    ...state,
    items: [
      ...state.items,
      {
        id: Date.now().toString(),
        title,
        url,
      },
    ],
  }),
  [DELETE_ITEM]: (state, { id }) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }),
  [UPDATE_ITEM]: (state, { title, id }) => ({
    ...state,
    items: state.items.map((item) => {
      if (item.id === id) {
        item.title = title
      }
      return item
    }),
  }),
  [SET_ITEMS]: (state, { data }) => ({
    ...state,
    items: data,
  }),
  DEFAULT: (state) => state,
}

export const appReducer = (state, action) => {
  const handler = handlers[action.type] || handlers.DEFAULT
  return handler(state, action)
}

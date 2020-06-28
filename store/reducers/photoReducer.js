import {
  GET_PHOTOS_REQUEST,
  GET_PHOTOS_SUCCESS,
  GET_PHOTOS_FAILURE,
} from '../actions/photos';

const initialState = {
  data: [],
};

const photoReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_REQUEST:
      return {
        ...state,
      };

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        data: action.data,
      };

    case GET_PHOTOS_FAILURE:
      return {
        ...state,
        error: action.error,
      };

    default:
      return state;
  }
};

export default photoReducer;

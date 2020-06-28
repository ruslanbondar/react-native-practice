export const GET_PHOTOS_REQUEST = 'GET_PHOTOS_REQUEST';
export const GET_PHOTOS_SUCCESS = 'GET_PHOTOS_SUCCESS';
export const GET_PHOTOS_FAILURE = 'GET_PHOTOS_FAILURE';

export const getPhotosRequest = () => {
  return {
    type: GET_PHOTOS_REQUEST,
  };
};

export const getPhotosSuccess = (data) => {
  return {
    type: GET_PHOTOS_SUCCESS,
    data,
  };
};

export const getPhotosFailure = (error) => {
  return {
    type: GET_PHOTOS_FAILURE,
    error,
  };
};

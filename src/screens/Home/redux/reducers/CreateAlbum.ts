import {CreateAlbumActionTypes, CreateAlbumState, CREATE_ALBUM_SUCCESS, CREATE_ALBUM_ERROR, CREATE_ALBUM} from '../action-types/CreateAlbum';

const initialState = {
  loading: false,
};

export default (state = initialState, action: CreateAlbumActionTypes): CreateAlbumState => {
  switch (action.type) {
    case CREATE_ALBUM:
      return {
        ...state,
        loading: true,
      };
    case CREATE_ALBUM_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case CREATE_ALBUM_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

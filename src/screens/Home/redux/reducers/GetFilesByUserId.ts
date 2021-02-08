import {
  GetFilesByUserIdActionTypes,
  GetFilesByUserIdState,
  GET_FILES_BY_USER_ID,
  GET_FILES_BY_USER_ID_ERROR,
  GET_FILES_BY_USER_ID_SUCCESS,
} from '../action-types/GetFilesByUserId';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetFilesByUserIdActionTypes): GetFilesByUserIdState => {
  switch (action.type) {
    case GET_FILES_BY_USER_ID:
      return {
        ...state,
        loading: true,
      };
    case GET_FILES_BY_USER_ID_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GET_FILES_BY_USER_ID_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

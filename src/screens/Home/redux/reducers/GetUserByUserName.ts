import {
  GeET_USER_BY_USER_NAME,
  GeET_USER_BY_USER_NAME_ERROR,
  GeET_USER_BY_USER_NAME_SUCCESS,
  GetUserByUserNameActionTypes,
  GetUserByUserNameState,
} from '../action-types/GetUserByUserName';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetUserByUserNameActionTypes): GetUserByUserNameState => {
  switch (action.type) {
    case GeET_USER_BY_USER_NAME:
      return {
        ...state,
        loading: true,
      };
    case GeET_USER_BY_USER_NAME_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GeET_USER_BY_USER_NAME_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

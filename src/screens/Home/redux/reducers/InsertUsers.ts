import {InsertUsersActionTypes, InsertUsersState, INSERT_USER, INSERT_USER_ERROR, INSERT_USER_SUCCESS} from '../action-types/InsertUsers';

const initialState = {
  loading: false,
};

export default (state = initialState, action: InsertUsersActionTypes): InsertUsersState => {
  switch (action.type) {
    case INSERT_USER:
      return {
        ...state,
        loading: true,
      };
    case INSERT_USER_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case INSERT_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

import {InsertProfileActionTypes, InsertProfileState, INSERT_PROFILE, INSERT_PROFILE_ERROR, INSERT_PROFILE_SUCCESS} from '../action-types/InsertProfile';

const initialState = {
  loading: false,
};

export default (state = initialState, action: InsertProfileActionTypes): InsertProfileState => {
  switch (action.type) {
    case INSERT_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case INSERT_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case INSERT_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

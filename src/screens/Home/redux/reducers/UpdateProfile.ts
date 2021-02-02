import {UpdateProfileActionTypes, UpdateProfileState, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS} from '../action-types/UpdateProfile';

const initialState = {
  loading: false,
};

export default (state = initialState, action: UpdateProfileActionTypes): UpdateProfileState => {
  switch (action.type) {
    case UPDATE_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case UPDATE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

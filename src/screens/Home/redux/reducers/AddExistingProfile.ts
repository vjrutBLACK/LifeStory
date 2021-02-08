import {
  AddExistingProfileActionTypes,
  AddExistingProfileState,
  ADD_EXISTING_PROFILE,
  ADD_EXISTING_PROFILE_SUCCESS,
  ADD_EXISTING_PROFILE_ERROR,
} from '../action-types/AddExistingProfile';

const initialState = {
  loading: false,
};

export default (state = initialState, action: AddExistingProfileActionTypes): AddExistingProfileState => {
  switch (action.type) {
    case ADD_EXISTING_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case ADD_EXISTING_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case ADD_EXISTING_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

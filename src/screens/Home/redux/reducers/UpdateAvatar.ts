import {UpdateAvatarActionTypes, UpdateAvatarState, UPDATE_AVATAR, UPDATE_AVATAR_ERROR, UPDATE_AVATAR_SUCCESS} from '../action-types/UpdateAvatar';

const initialState = {
  loading: false,
};

export default (state = initialState, action: UpdateAvatarActionTypes): UpdateAvatarState => {
  switch (action.type) {
    case UPDATE_AVATAR:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_AVATAR_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case UPDATE_AVATAR_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

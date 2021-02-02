import {RejectProfileActionTypes, RejectProfileState, REJECT_PROFILE, REJECT_PROFILE_ERROR, REJECT_PROFILE_SUCCESS} from '../action-types/RejectProfile';

const initialState = {
  loading: false,
};

export default (state = initialState, action: RejectProfileActionTypes): RejectProfileState => {
  switch (action.type) {
    case REJECT_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case REJECT_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case REJECT_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

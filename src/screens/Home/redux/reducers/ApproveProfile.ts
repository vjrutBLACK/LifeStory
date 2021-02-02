import {ApproveProfileActionTypes, ApproveProfileState, APPROVE_PROFILE, APPROVE_PROFILE_SUCCESS, APPROVE_PROFILE_ERROR} from '../action-types/ApproveProfile';

const initialState = {
  loading: false,
};

export default (state = initialState, action: ApproveProfileActionTypes): ApproveProfileState => {
  switch (action.type) {
    case APPROVE_PROFILE:
      return {
        ...state,
        loading: true,
      };
    case APPROVE_PROFILE_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case APPROVE_PROFILE_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

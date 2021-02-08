import {RegisterActionTypes, REGISTER_SUCCESS, REGISTER, REGISTER_ERROR, RegisterState} from '../action-types/register';

const initialState = {
  loading: false,
};

export default (state = initialState, action: RegisterActionTypes): RegisterState => {
  switch (action.type) {
    case REGISTER:
      return {
        ...state,
        loading: true,
      };

    case REGISTER_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case REGISTER_ERROR:
      return {
        ...state,
        loading: false,
      };

    default:
      return state;
  }
};

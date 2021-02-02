import {LOGIN, LoginActionTypes, LoginState, LOGIN_ERROR, LOGIN_SUCCESS} from '../action-types/login';

const initialState = {
  loading: false,
};

export default (state = initialState, action: LoginActionTypes): LoginState => {
  switch (action.type) {
    case LOGIN:
      return {
        ...state,
        loading: true,
      };
    case LOGIN_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case LOGIN_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

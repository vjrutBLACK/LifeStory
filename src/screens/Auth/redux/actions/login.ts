import {LOGIN, LoginActionTypes, LoginInput, LOGIN_ERROR, LOGIN_SUCCESS, UserInfo} from '@screens/Auth/redux/action-types';
import {AppError} from '@shared/types';

export const login = (payload: LoginInput): LoginActionTypes => ({
  type: LOGIN,
  payload,
});

export const loginError = (error: AppError): LoginActionTypes => ({
  type: LOGIN_ERROR,
  payload: error,
});

export const loginSuccess = (payload?: UserInfo): LoginActionTypes => ({
  type: LOGIN_SUCCESS,
  payload,
});

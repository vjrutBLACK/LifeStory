import {AppError} from '@shared/types';
import {REGISTER, RegisterActionTypes, RegisterInput, REGISTER_ERROR, REGISTER_SUCCESS, RegisterUser} from '@screens/Auth/redux/action-types';

export const register = (payload: RegisterInput): RegisterActionTypes => ({
  type: REGISTER,
  payload: payload,
});

export const registerError = (payload: AppError): RegisterActionTypes => ({
  type: REGISTER_ERROR,
  payload,
});

export const registerSuccess = (payload: RegisterUser): RegisterActionTypes => ({
  type: REGISTER_SUCCESS,
  payload,
});

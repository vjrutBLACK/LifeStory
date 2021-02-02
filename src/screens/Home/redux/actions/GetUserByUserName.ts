import {AppError} from '@shared/types';
import {GeET_USER_BY_USER_NAME, GeET_USER_BY_USER_NAME_SUCCESS, GetUserByUserNameActionTypes} from '../action-types/GetUserByUserName';

export const getUserByUserName = (payload: string): GetUserByUserNameActionTypes => ({
  type: GeET_USER_BY_USER_NAME,
  payload,
});

export const getUserByUserNameError = (error: AppError): GetUserByUserNameActionTypes => ({
  type: GeET_USER_BY_USER_NAME_SUCCESS,
  payload: error,
});

export const getUserByUserNameSuccess = (payload?: any): GetUserByUserNameActionTypes => ({
  type: GeET_USER_BY_USER_NAME_SUCCESS,
  payload,
});

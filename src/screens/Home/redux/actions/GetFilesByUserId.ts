import {GetFilesByUserIdActionTypes} from '@screens/Home/redux/action-types';
import {AppError} from '@shared/types';
import {GET_FILES_BY_USER_ID, GET_FILES_BY_USER_ID_SUCCESS} from '../action-types/GetFilesByUserId';

export const getFilesByUserId = (payload: string): GetFilesByUserIdActionTypes => ({
  type: GET_FILES_BY_USER_ID,
  payload,
});

export const getFilesByUserIdError = (error: AppError): GetFilesByUserIdActionTypes => ({
  type: GET_FILES_BY_USER_ID_SUCCESS,
  payload: error,
});

export const getFilesByUserIdSuccess = (payload?: any): GetFilesByUserIdActionTypes => ({
  type: GET_FILES_BY_USER_ID_SUCCESS,
  payload,
});

import {AppError} from '@shared/types';

export const GET_FILES_BY_USER_ID = 'GET_FILES_BY_USER_ID';
export const GET_FILES_BY_USER_ID_SUCCESS = 'GET_FILES_BY_USER_ID_SUCCESS';
export const GET_FILES_BY_USER_ID_ERROR = 'GET_FILES_BY_USER_ID_ERROR';

export interface GetFilesByUserIdState {
  loading: boolean;
  payload?: any;
}

export interface GetFilesByUserIdAction {
  type: typeof GET_FILES_BY_USER_ID;
  payload?: string;
}

export interface GetFilesByUserIdActionSuccess {
  type: typeof GET_FILES_BY_USER_ID_SUCCESS;
  payload?: any;
}

export interface GetFilesByUserIdActionError {
  type: typeof GET_FILES_BY_USER_ID_ERROR;
  payload?: AppError;
}

export type GetFilesByUserIdActionTypes = GetFilesByUserIdAction | GetFilesByUserIdActionSuccess | GetFilesByUserIdActionError;

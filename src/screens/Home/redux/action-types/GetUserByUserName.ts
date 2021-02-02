import {AppError} from '@shared/types';

export const GeET_USER_BY_USER_NAME = 'GeET_USER_BY_USER_NAME';
export const GeET_USER_BY_USER_NAME_SUCCESS = 'GeET_USER_BY_USER_NAME_SUCCESS';
export const GeET_USER_BY_USER_NAME_ERROR = 'GeET_USER_BY_USER_NAME_ERROR';

export interface GetUserByUserNameState {
  loading: boolean;
  payload?: any;
}

export interface GetUserByUserNameAction {
  type: typeof GeET_USER_BY_USER_NAME;
  payload?: string;
}

export interface GetUserByUserNameActionSuccess {
  type: typeof GeET_USER_BY_USER_NAME_SUCCESS;
  payload?: any;
}

export interface GetUserByUserNameActionError {
  type: typeof GeET_USER_BY_USER_NAME_ERROR;
  payload?: AppError;
}

export type GetUserByUserNameActionTypes = GetUserByUserNameAction | GetUserByUserNameActionSuccess | GetUserByUserNameActionError;

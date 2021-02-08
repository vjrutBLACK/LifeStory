import {AppError} from '@shared/types';
import {INSERT_USER, INSERT_USER_SUCCESS, INSERT_USER_ERROR, InsertUsersActionTypes, InsertUsersInput, InsertUsers} from '../action-types/InsertUsers';

export const insertUsers = (payload: InsertUsersInput): InsertUsersActionTypes => ({
  type: INSERT_USER,
  payload,
});

export const insertUsersError = (error: AppError): InsertUsersActionTypes => ({
  type: INSERT_USER_ERROR,
  payload: error,
});

export const insertUsersSuccess = (payload?: InsertUsers): InsertUsersActionTypes => ({
  type: INSERT_USER_SUCCESS,
  payload,
});

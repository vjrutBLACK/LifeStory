import {AppError} from '@shared/types';
import {Gender} from '../../../../redux/actions_type';

export const INSERT_USER = 'INSERT_USER';
export const INSERT_USER_SUCCESS = 'INSERT_USER_SUCCESS';
export const INSERT_USER_ERROR = 'INSERT_USER_ERROR';

export interface InsertUsersState {
  loading: boolean;
  payload?: InsertUsers;
}
export interface InsertUsersInput {
  Phone: string;
  DateOfBirth: Date;
  FullName: string;
  Gender: Gender;
  TypeOfUserName: number;
  Avatar: string;
}
export interface InsertUsers {
  ID: string;
  Email: string;
  NickName: string;
  FullName: string;
  Phone: string;
  Password: string;
  DateOfBirth: Date;
  Avatar: string;
  Gender: Gender;
  Status: number;
  CreatedDate: Date;
  TypeOfUserName: number;
}

export interface InsertUsersAction {
  type: typeof INSERT_USER;
  payload?: InsertUsersInput;
}

export interface InsertUsersActionSuccess {
  type: typeof INSERT_USER_SUCCESS;
  payload?: InsertUsers;
}

export interface InsertUsersActionError {
  type: typeof INSERT_USER_ERROR;
  payload?: AppError;
}

export type InsertUsersActionTypes = InsertUsersAction | InsertUsersActionSuccess | InsertUsersActionError;

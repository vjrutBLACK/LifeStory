import {AppError} from '@shared/types';

export const LOGIN = 'LOGIN';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_ERROR = 'LOGIN_ERROR';

export interface LoginInput {
  Email: string;
  Phone: string;
  Password: string;
  TypeOfUserName: number;
}

export interface UserDetail {
  ID: string;
  Email: string;
  Phone: string;
  Password: string;
  FullName: string;
  TypeOfUserName: number;
  Avatar: string;
  DateOfBirth: Date;
  Gender: number;
  Status: number;
  CreatedDate: Date;
}
export interface LoginState {
  loading: boolean;
  payload?: UserInfo;
}
export interface UserInfo {
  UserDetail: UserDetail;
  UserToken: string;
  Email: string;
}

export interface LoginAction {
  type: typeof LOGIN;
  payload?: LoginInput;
}

export interface LoginActionSuccess {
  type: typeof LOGIN_SUCCESS;
  payload?: UserInfo;
}

export interface LoginActionError {
  type: typeof LOGIN_ERROR;
  payload?: AppError;
}

export type LoginActionTypes = LoginAction | LoginActionSuccess | LoginActionError;

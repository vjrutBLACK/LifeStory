import {AppError} from '@shared/types';
import {LoginInput} from './login';

export const REGISTER = 'REGISTER';
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
export const REGISTER_ERROR = 'REGISTER_ERROR';

export interface RegisterInput {
  Email?: string | null;
  Phone: string;
  Password: string;
  FullName: string;
  TypeOfUserName: number;
  Avatar: string;
}

export interface RegisterState {
  loading: boolean;
  payload?: RegisterInput;
}

export interface RegisterAction {
  type: typeof REGISTER;
  payload: RegisterInput;
}

export interface RegisterActionSuccess {
  type: typeof REGISTER_SUCCESS;
  payload: LoginInput;
}

export interface RegisterActionError {
  type: typeof REGISTER_ERROR;
  payload: AppError;
}

export type RegisterActionTypes = RegisterAction | RegisterActionSuccess | RegisterActionError;

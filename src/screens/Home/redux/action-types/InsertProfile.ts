import {AppError} from '@shared/types';

export const INSERT_PROFILE = 'INSERT_PROFILE';
export const INSERT_PROFILE_SUCCESS = 'INSERT_PROFILE_SUCCESS';
export const INSERT_PROFILE_ERROR = 'INSERT_PROFILE_ERROR';

export interface InsertProfileState {
  loading: boolean;
  payload?: any;
}

export interface InsertProfileInput {
  UserId: string;
  Profile: Profile;
}

export interface Profile {
  ID: string;
  ProfileName: string;
  CreatedDate: string;
  Status: number;
}

export interface InsertProfileAction {
  type: typeof INSERT_PROFILE;
  payload?: InsertProfileInput;
}

export interface InsertProfileActionSuccess {
  type: typeof INSERT_PROFILE_SUCCESS;
  payload?: any;
}

export interface InsertProfileActionError {
  type: typeof INSERT_PROFILE_ERROR;
  payload?: AppError;
}

export type InsertProfileActionTypes = InsertProfileAction | InsertProfileActionSuccess | InsertProfileActionError;

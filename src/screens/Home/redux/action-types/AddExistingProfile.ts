import {AppError} from '@shared/types';

export const ADD_EXISTING_PROFILE = 'ADD_EXISTING_PROFILE';
export const ADD_EXISTING_PROFILE_SUCCESS = 'ADD_EXISTING_PROFILE_SUCCESS';
export const ADD_EXISTING_PROFILE_ERROR = 'ADD_EXISTING_PROFILE_ERROR';
export interface AddExistingProfileState {
  loading: boolean;
  payload?: any;
}

export interface AddExistingProfileInput {
  UserId: string;
  ProfileId: string;
  BelongUserId: string;
  Status: number;
  RelationId: number;
  UserManage: string;
}

export interface AddExistingProfileAction {
  type: typeof ADD_EXISTING_PROFILE;
  payload?: AddExistingProfileInput;
}

export interface AddExistingProfileActionSuccess {
  type: typeof ADD_EXISTING_PROFILE_SUCCESS;
  payload?: any;
}

export interface AddExistingProfileActionError {
  type: typeof ADD_EXISTING_PROFILE_ERROR;
  payload?: AppError;
}

export type AddExistingProfileActionTypes = AddExistingProfileAction | AddExistingProfileActionSuccess | AddExistingProfileActionError;

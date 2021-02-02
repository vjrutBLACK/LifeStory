import {AppError} from '@shared/types';

export const UPDATE_PROFILE = 'UPDATE_PROFILE';
export const UPDATE_PROFILE_SUCCESS = 'UPDATE_PROFILE_SUCCESS';
export const UPDATE_PROFILE_ERROR = 'UPDATE_PROFILE_ERROR';

export interface UpdateProfileState {
  loading: boolean;
  payload?: any;
}
export interface UpdateProfileInput {
  ID: string;
  ProfileName: string;
  CreatedDate: Date;
  Status: number;
}

export interface UpdateProfileAction {
  type: typeof UPDATE_PROFILE;
  payload?: UpdateProfileInput;
}

export interface UpdateProfileActionSuccess {
  type: typeof UPDATE_PROFILE_SUCCESS;
  payload?: any;
}

export interface UpdateProfileActionError {
  type: typeof UPDATE_PROFILE_ERROR;
  payload?: AppError;
}

export type UpdateProfileActionTypes = UpdateProfileAction | UpdateProfileActionSuccess | UpdateProfileActionError;

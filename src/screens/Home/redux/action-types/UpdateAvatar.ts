import {AppError} from '@shared/types';

export const UPDATE_AVATAR = 'UPDATE_AVATAR';
export const UPDATE_AVATAR_SUCCESS = 'UPDATE_AVATAR_SUCCESS';
export const UPDATE_AVATAR_ERROR = 'UPDATE_AVATAR_ERROR';

export interface UpdateAvatarState {
  loading: boolean;
  payload?: any;
}

export interface UpdateAvatarAction {
  type: typeof UPDATE_AVATAR;
  payload?: string;
}

export interface UpdateAvatarActionSuccess {
  type: typeof UPDATE_AVATAR_SUCCESS;
  payload?: any;
}

export interface UpdateAvatarActionError {
  type: typeof UPDATE_AVATAR_ERROR;
  payload?: AppError;
}

export type UpdateAvatarActionTypes = UpdateAvatarAction | UpdateAvatarActionSuccess | UpdateAvatarActionError;

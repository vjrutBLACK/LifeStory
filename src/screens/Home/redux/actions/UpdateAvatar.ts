import {AppError} from '@shared/types';
import {UpdateAvatarActionTypes, UPDATE_AVATAR, UPDATE_AVATAR_ERROR, UPDATE_AVATAR_SUCCESS} from '../action-types/UpdateAvatar';

export const updateAvatar = (payload: string): UpdateAvatarActionTypes => ({
  type: UPDATE_AVATAR,
  payload,
});

export const updateAvatarError = (error: AppError): UpdateAvatarActionTypes => ({
  type: UPDATE_AVATAR_SUCCESS,
  payload: error,
});

export const updateAvatarSuccess = (payload?: any): UpdateAvatarActionTypes => ({
  type: UPDATE_AVATAR_ERROR,
  payload,
});

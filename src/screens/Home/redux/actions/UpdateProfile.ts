import {AppError} from '@shared/types';
import {UpdateProfileActionTypes, UPDATE_PROFILE, UPDATE_PROFILE_ERROR, UPDATE_PROFILE_SUCCESS, UpdateProfileInput} from '../action-types/UpdateProfile';

export const updateProfile = (payload: UpdateProfileInput): UpdateProfileActionTypes => ({
  type: UPDATE_PROFILE,
  payload,
});

export const updateProfileError = (error: AppError): UpdateProfileActionTypes => ({
  type: UPDATE_PROFILE_SUCCESS,
  payload: error,
});

export const updateProfileSuccess = (payload?: any): UpdateProfileActionTypes => ({
  type: UPDATE_PROFILE_ERROR,
  payload,
});

import {AppError} from '@shared/types';
import {INSERT_PROFILE, INSERT_PROFILE_SUCCESS, InsertProfileActionTypes, InsertProfileInput} from '../action-types/InsertProfile';

export const insertProfile = (payload: InsertProfileInput): InsertProfileActionTypes => ({
  type: INSERT_PROFILE,
  payload,
});

export const insertProfileError = (error: AppError): InsertProfileActionTypes => ({
  type: INSERT_PROFILE_SUCCESS,
  payload: error,
});

export const insertProfileSuccess = (payload?: any): InsertProfileActionTypes => ({
  type: INSERT_PROFILE_SUCCESS,
  payload,
});

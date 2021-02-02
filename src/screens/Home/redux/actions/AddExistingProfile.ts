import {AppError} from '@shared/types';
import {AddExistingProfileState, AddExistingProfileInput} from '../action-types/AddExistingProfile';
import {
  ADD_EXISTING_PROFILE,
  ADD_EXISTING_PROFILE_SUCCESS,
  ADD_EXISTING_PROFILE_ERROR,
  AddExistingProfileActionTypes,
} from '../action-types/AddExistingProfile';

export const addExistingProfile = (payload: AddExistingProfileInput): AddExistingProfileActionTypes => ({
  type: ADD_EXISTING_PROFILE,
  payload,
});

export const addExistingProfileError = (error: AppError): AddExistingProfileActionTypes => ({
  type: ADD_EXISTING_PROFILE_SUCCESS,
  payload: error,
});

export const addExistingProfileSuccess = (payload?: any): AddExistingProfileActionTypes => ({
  type: ADD_EXISTING_PROFILE_ERROR,
  payload,
});

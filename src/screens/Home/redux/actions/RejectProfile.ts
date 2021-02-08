import {AppError} from '@shared/types';
import {RejectProfileActionTypes, REJECT_PROFILE, REJECT_PROFILE_ERROR, REJECT_PROFILE_SUCCESS, RejectProfileInput} from '../action-types/RejectProfile';

export const rejectProfile = (payload: RejectProfileInput): RejectProfileActionTypes => ({
  type: REJECT_PROFILE,
  payload,
});

export const rejectProfileError = (error: AppError): RejectProfileActionTypes => ({
  type: REJECT_PROFILE_SUCCESS,
  payload: error,
});

export const rejectProfileSuccess = (payload?: any): RejectProfileActionTypes => ({
  type: REJECT_PROFILE_ERROR,
  payload,
});

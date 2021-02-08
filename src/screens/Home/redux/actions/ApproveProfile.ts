import {AppError} from '@shared/types';
import {
  ApproveProfileActionTypes,
  APPROVE_PROFILE,
  APPROVE_PROFILE_ERROR,
  APPROVE_PROFILE_SUCCESS,
  ApproveProfileState,
  ApproveProfileInput,
} from '../action-types/ApproveProfile';

export const approveProfile = (payload: ApproveProfileInput): ApproveProfileActionTypes => ({
  type: APPROVE_PROFILE,
  payload,
});

export const approveProfileError = (error: AppError): ApproveProfileActionTypes => ({
  type: APPROVE_PROFILE_SUCCESS,
  payload: error,
});

export const approveProfileSuccess = (payload?: any): ApproveProfileActionTypes => ({
  type: APPROVE_PROFILE_ERROR,
  payload,
});

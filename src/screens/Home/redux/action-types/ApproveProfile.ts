import {AppError} from '@shared/types';

export const APPROVE_PROFILE = 'APPROVE_PROFILE';
export const APPROVE_PROFILE_SUCCESS = 'APPROVE_PROFILE_SUCCESS';
export const APPROVE_PROFILE_ERROR = 'APPROVE_PROFILE_ERROR';

export interface ApproveProfileState {
  loading: boolean;
  payload?: any;
}

export interface ApproveProfileInput {
  UserId: string;
  ProfileId: string;
  BelongUserId: string;
  Status: number;
  RelationID: number;
  UserManage: string;
}

export interface ApproveProfileAction {
  type: typeof APPROVE_PROFILE;
  payload?: ApproveProfileInput;
}

export interface ApproveProfileActionSuccess {
  type: typeof APPROVE_PROFILE_SUCCESS;
  payload?: any;
}

export interface ApproveProfileActionError {
  type: typeof APPROVE_PROFILE_ERROR;
  payload?: AppError;
}

export type ApproveProfileActionTypes = ApproveProfileAction | ApproveProfileActionSuccess | ApproveProfileActionError;

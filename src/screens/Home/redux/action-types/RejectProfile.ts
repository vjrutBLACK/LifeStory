import {AppError} from '@shared/types';

export const REJECT_PROFILE = 'REJECT_PROFILE';
export const REJECT_PROFILE_SUCCESS = 'REJECT_PROFILE_SUCCESS';
export const REJECT_PROFILE_ERROR = 'REJECT_PROFILE_ERROR';

export interface RejectProfileState {
  loading: boolean;
  payload?: any;
}
export interface RejectProfileInput {
  UserId: string;
  ProfileId: string;
  BelongUserId: string;
  Status: number;
  RelationID: number;
  UserManage: string;
}

export interface RejectProfileAction {
  type: typeof REJECT_PROFILE;
  payload?: RejectProfileInput;
}

export interface RejectProfileActionSuccess {
  type: typeof REJECT_PROFILE_SUCCESS;
  payload?: any;
}

export interface RejectProfileActionError {
  type: typeof REJECT_PROFILE_ERROR;
  payload?: AppError;
}

export type RejectProfileActionTypes = RejectProfileAction | RejectProfileActionSuccess | RejectProfileActionError;

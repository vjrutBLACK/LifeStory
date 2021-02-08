import {AppError} from '@shared/types';

export const GET_FILES_BY_TIME_LINE_OF_USER = 'GET_FILES_BY_TIME_LINE_OF_USER';
export const GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS = 'GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS';
export const GET_FILES_BY_TIME_LINE_OF_USER_ERROR = 'GET_FILES_BY_TIME_LINE_OF_USER_ERROR';

export interface GetFilesByTimelineOfUserState {
  loading: boolean;
  payload?: any;
}

export interface GetFilesByTimelineOfUserAction {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER;
  payload?: string;
}

export interface GetFilesByTimelineOfUserActionSuccess {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS;
  payload?: any;
}

export interface GetFilesByTimelineOfUserActionError {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_ERROR;
  payload?: AppError;
}

export type GetFilesByTimelineOfUserActionTypes = GetFilesByTimelineOfUserAction | GetFilesByTimelineOfUserActionSuccess | GetFilesByTimelineOfUserActionError;

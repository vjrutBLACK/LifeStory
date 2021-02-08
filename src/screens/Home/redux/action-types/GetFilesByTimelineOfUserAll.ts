import {AppError} from '@shared/types';

export const GET_FILES_BY_TIME_LINE_OF_USER_ALL = 'GET_FILES_BY_TIME_LINE_OF_USER_ALL';
export const GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS = 'GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS';
export const GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR = 'GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR';

export interface GetFilesByTimelineOfUserAllInput {
  userId: string;
  pageIndex: number;
  pageSize: number;
}

export interface GetFilesByTimelineOfUserAllState {
  loading: boolean;
  payload?: any;
}

export interface GetFilesByTimelineOfUserAllAction {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_ALL;
  payload?: GetFilesByTimelineOfUserAllInput;
}

export interface GetFilesByTimelineOfUserAllActionSuccess {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS;
  payload?: any;
}

export interface GetFilesByTimelineOfUserAllActionError {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR;
  payload?: AppError;
}

export type GetFilesByTimelineOfUserAllActionTypes =
  | GetFilesByTimelineOfUserAllAction
  | GetFilesByTimelineOfUserAllActionSuccess
  | GetFilesByTimelineOfUserAllActionError;

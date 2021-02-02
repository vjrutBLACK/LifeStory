import {AppError} from '@shared/types';

export const GET_FILES_BY_TIME_LINE_OF_USER_PAGING = 'GET_FILES_BY_TIME_LINE_OF_USER_PAGING';
export const GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS = 'GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS';
export const GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR = 'GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR';

export interface GetFilesByTimelineOfUserPagingInput {
  userId: string;
  year: number;
  pageIndex: number;
  pageSize: number;
}

export interface GetFilesByTimelineOfUserPagingState {
  loading: boolean;
  payload?: any;
}

export interface GetFilesByTimelineOfUserPagingAction {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_PAGING;
  payload?: GetFilesByTimelineOfUserPagingInput;
}

export interface GetFilesByTimelineOfUserPagingActionSuccess {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS;
  payload?: any;
}

export interface GetFilesByTimelineOfUserPagingActionError {
  type: typeof GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR;
  payload?: AppError;
}

export type GetFilesByTimelineOfUserPagingActionTypes =
  | GetFilesByTimelineOfUserPagingAction
  | GetFilesByTimelineOfUserPagingActionSuccess
  | GetFilesByTimelineOfUserPagingActionError;

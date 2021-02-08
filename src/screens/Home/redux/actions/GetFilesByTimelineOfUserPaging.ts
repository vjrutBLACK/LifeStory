import {GetFilesByTimelineOfUserPagingActionTypes} from '@screens/Home/redux/action-types';
import {AppError} from '@shared/types';
import {
  GET_FILES_BY_TIME_LINE_OF_USER_PAGING,
  GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS,
  GetFilesByTimelineOfUserPagingInput,
} from '../action-types/GetFilesByTimelineOfUserPaging';

export const getFilesByTimelineOfUserPaging = (payload: GetFilesByTimelineOfUserPagingInput): GetFilesByTimelineOfUserPagingActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_PAGING,
  payload,
});

export const getFilesByTimelineOfUserPagingError = (error: AppError): GetFilesByTimelineOfUserPagingActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS,
  payload: error,
});

export const getFilesByTimelineOfUserPagingSuccess = (payload?: any): GetFilesByTimelineOfUserPagingActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS,
  payload,
});

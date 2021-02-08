import {GetFilesByTimelineOfUserActionTypes} from '@screens/Home/redux/action-types';
import {AppError} from '@shared/types';
import {
  GET_FILES_BY_TIME_LINE_OF_USER,
  GET_FILES_BY_TIME_LINE_OF_USER_ERROR,
  GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS,
} from '../action-types/GetFilesByTimelineOfUser';

export const getFilesByTimelineOfUser = (payload: string): GetFilesByTimelineOfUserActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER,
  payload,
});

export const getFilesByTimelineOfUserError = (error: AppError): GetFilesByTimelineOfUserActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_ERROR,
  payload: error,
});

export const getFilesByTimelineOfUserSuccess = (payload?: any): GetFilesByTimelineOfUserActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS,
  payload,
});

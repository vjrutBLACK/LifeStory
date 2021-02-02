import {GetFilesByTimelineOfUserAllActionTypes} from '@screens/Home/redux/action-types';
import {AppError} from '@shared/types';
import {
  GET_FILES_BY_TIME_LINE_OF_USER_ALL,
  GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS,
  GetFilesByTimelineOfUserAllInput,
} from '../action-types/GetFilesByTimelineOfUserAll';

export const getFilesByTimelineOfUserAll = (payload: GetFilesByTimelineOfUserAllInput): GetFilesByTimelineOfUserAllActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_ALL,
  payload,
});

export const getFilesByTimelineOfUserAllError = (error: AppError): GetFilesByTimelineOfUserAllActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS,
  payload: error,
});

export const getFilesByTimelineOfUserAllSuccess = (payload?: any): GetFilesByTimelineOfUserAllActionTypes => ({
  type: GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS,
  payload,
});

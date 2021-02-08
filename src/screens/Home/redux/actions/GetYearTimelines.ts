import {GetYearTimelinesActionTypes} from '@screens/Home/redux/action-types';
import {AppError} from '@shared/types';
import {GET_YEAR_TIME_LINES, GET_YEAR_TIME_LINES_SUCCESS} from '../action-types/GetYearTimelines';

export const getYearTimelines = (payload: string): GetYearTimelinesActionTypes => ({
  type: GET_YEAR_TIME_LINES,
  payload,
});

export const getYearTimelinesError = (error: AppError): GetYearTimelinesActionTypes => ({
  type: GET_YEAR_TIME_LINES_SUCCESS,
  payload: error,
});

export const getYearTimelinesSuccess = (payload?: any): GetYearTimelinesActionTypes => ({
  type: GET_YEAR_TIME_LINES_SUCCESS,
  payload,
});

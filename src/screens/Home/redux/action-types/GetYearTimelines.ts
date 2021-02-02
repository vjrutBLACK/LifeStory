import {AppError} from '@shared/types';

export const GET_YEAR_TIME_LINES = 'GET_YEAR_TIME_LINES';
export const GET_YEAR_TIME_LINES_SUCCESS = 'GET_YEAR_TIME_LINES_SUCCESS';
export const GET_YEAR_TIME_LINES_ERROR = 'GET_YEAR_TIME_LINES_ERROR';

export interface GetYearTimelinesState {
  loading: boolean;
  payload?: any;
}

export interface GetYearTimelinesAction {
  type: typeof GET_YEAR_TIME_LINES;
  payload?: string;
}

export interface GetYearTimelinesActionSuccess {
  type: typeof GET_YEAR_TIME_LINES_SUCCESS;
  payload?: any;
}

export interface GetYearTimelinesActionError {
  type: typeof GET_YEAR_TIME_LINES_ERROR;
  payload?: AppError;
}

export type GetYearTimelinesActionTypes = GetYearTimelinesAction | GetYearTimelinesActionSuccess | GetYearTimelinesActionError;

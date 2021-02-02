import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetYearTimelinesAction, GetYearTimelinesActionError, GetYearTimelinesActionSuccess} from '../action-types';
import {getYearTimelinesSuccess, getYearTimelinesError} from '../actions';

export function* getYearTimelinesAsync(action: GetYearTimelinesAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getYearTimelinesApi, action.payload as string);
    console.log('payload', payload);
    yield put(getYearTimelinesSuccess(payload));
  } catch (error) {
    yield put(getYearTimelinesError(error));
  }
}

export function* getYearTimelinesSuccessAsync(action: GetYearTimelinesActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getYearTimelines Success');
  }
}
export function* getYearTimelinesErrorAsync(action: GetYearTimelinesActionError) {
  const data = action.payload;
}

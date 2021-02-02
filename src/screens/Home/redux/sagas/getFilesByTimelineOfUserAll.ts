import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetFilesByTimelineOfUserAllAction, GetFilesByTimelineOfUserAllActionError, GetFilesByTimelineOfUserAllActionSuccess} from '../action-types';
import {getFilesByTimelineOfUserAllSuccess, getFilesByTimelineOfUserAllError} from '../actions';
import {GetFilesByTimelineOfUserAllInput} from '../action-types/GetFilesByTimelineOfUserAll';

export function* getFilesByTimelineOfUserAllAsync(action: GetFilesByTimelineOfUserAllAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getFilesByTimelineOfUserAllApi, action.payload as GetFilesByTimelineOfUserAllInput);
    console.log('payload', payload);
    yield put(getFilesByTimelineOfUserAllSuccess(payload));
  } catch (error) {
    yield put(getFilesByTimelineOfUserAllError(error));
  }
}

export function* getFilesByTimelineOfUserAllSuccessAsync(action: GetFilesByTimelineOfUserAllActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getFilesByTimelineOfUserAll Success');
  }
}
export function* getFilesByTimelineOfUserAllErrorAsync(action: GetFilesByTimelineOfUserAllActionError) {
  const data = action.payload;
}

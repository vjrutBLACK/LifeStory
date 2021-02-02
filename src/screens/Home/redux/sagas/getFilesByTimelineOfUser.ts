import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetFilesByTimelineOfUserAction, GetFilesByTimelineOfUserActionError, GetFilesByTimelineOfUserActionSuccess} from '../action-types';
import {getFilesByTimelineOfUserSuccess, getFilesByTimelineOfUserError} from '../actions';

export function* getFilesByTimelineOfUserAsync(action: GetFilesByTimelineOfUserAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getFilesByTimelineOfUserApi, action.payload as string);
    console.log('payload', payload);
    yield put(getFilesByTimelineOfUserSuccess(payload));
  } catch (error) {
    yield put(getFilesByTimelineOfUserError(error));
  }
}

export function* getFilesByTimelineOfUserSuccessAsync(action: GetFilesByTimelineOfUserActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getFilesByTimelineOfUser Success');
  }
}
export function* getFilesByTimelineOfUserErrorAsync(action: GetFilesByTimelineOfUserActionError) {
  const data = action.payload;
}

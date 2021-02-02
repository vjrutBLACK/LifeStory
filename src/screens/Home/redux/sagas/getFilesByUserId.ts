import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetFilesByUserIdAction, GetFilesByUserIdActionError, GetFilesByUserIdActionSuccess} from '../action-types';
import {getFilesByUserIdSuccess, getFilesByUserIdError} from '../actions';

export function* getFilesByUserIdAsync(action: GetFilesByUserIdAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getFilesByUserIdApi, action.payload as string);
    console.log('payload', payload);
    yield put(getFilesByUserIdSuccess(payload));
  } catch (error) {
    yield put(getFilesByUserIdError(error));
  }
}

export function* getFilesByUserIdSuccessAsync(action: GetFilesByUserIdActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getFilesByUserId Success');
  }
}
export function* getFilesByUserIdErrorAsync(action: GetFilesByUserIdActionError) {
  const data = action.payload;
}

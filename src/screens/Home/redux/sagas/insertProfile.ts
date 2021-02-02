import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {InsertProfileAction, InsertProfileActionError, InsertProfileActionSuccess, InsertProfileInput} from '../action-types';
import {insertProfileSuccess, insertProfileError} from '../actions';

export function* insertProfileAsync(action: InsertProfileAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.insertProfileApi, action.payload as InsertProfileInput);
    console.log('payload', payload);
    yield put(insertProfileSuccess(payload));
  } catch (error) {
    yield put(insertProfileError(error));
  }
}

export function* insertProfileSuccessAsync(action: InsertProfileActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('insertProfile Success');
  }
}
export function* insertProfileErrorAsync(action: InsertProfileActionError) {
  const data = action.payload;
}

import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetUserByUserNameAction, GetUserByUserNameActionError, GetUserByUserNameActionSuccess} from '../action-types';
import {getUserByUserNameSuccess, getUserByUserNameError} from '../actions';

export function* getUserByUserNameAsync(action: GetUserByUserNameAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getUserByUserNameApi, action.payload as string);
    console.log('payload', payload);
    yield put(getUserByUserNameSuccess(payload));
  } catch (error) {
    yield put(getUserByUserNameError(error));
  }
}

export function* getUserByUserNameSuccessAsync(action: GetUserByUserNameActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getUserByUserName Success');
  }
}
export function* getUserByUserNameErrorAsync(action: GetUserByUserNameActionError) {
  const data = action.payload;
}

import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {InsertUsersAction, InsertUsersActionError, InsertUsersActionSuccess, InsertUsersInput} from '../action-types';
import {insertUsersSuccess, insertUsersError} from '../actions';

export function* insertUsersAsync(action: InsertUsersAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.insertUsersApi, action.payload as InsertUsersInput);
    console.log('payload', payload);
    yield put(insertUsersSuccess(payload));
  } catch (error) {
    yield put(insertUsersError(error));
  }
}

export function* insertUsersSuccessAsync(action: InsertUsersActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('insertUsers Success');
  }
}
export function* insertUsersErrorAsync(action: InsertUsersActionError) {
  const data = action.payload;
}

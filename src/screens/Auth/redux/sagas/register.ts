import {registerError, registerSuccess, login} from '@screens/Auth/redux/actions';
import * as apis from '@screens/Auth/services/apis';
import {call, put} from 'redux-saga/effects';
import {RegisterAction, RegisterActionSuccess, RegisterActionError} from '../action-types/register';
import {SnackbarService} from '@helpers/snackbar';

export function* registerAsync(action: RegisterAction) {
  try {
    const payload = yield call(apis.register, action.payload);
    console.log('payload', payload);
    if (!payload) {
      yield put(registerSuccess(action?.payload));
    }
  } catch (error) {
    console.log('error', error);
    yield put(registerError(error));
  }
}

export function* loginSuccessAsync(action: RegisterActionSuccess) {
  if (action?.payload) {
    yield put(login(action?.payload));
  }
}
export function* loginErrorAsync(action: RegisterActionError) {
  const data = action.payload;
}

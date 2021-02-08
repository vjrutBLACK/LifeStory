import {SnackbarService} from '@helpers/snackbar';
import {LoginAction, LoginActionError, LoginActionSuccess} from '@screens/Auth/redux/action-types';
import {loginError, loginSuccess} from '@screens/Auth/redux/actions';
import * as apis from '@screens/Auth/services/apis';
import {call, put} from 'redux-saga/effects';
import {LoginInput} from '../action-types/login';

export function* loginAsync(action: LoginAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.login, action.payload as LoginInput);
    console.log('payload', payload);
    yield put(loginSuccess(payload));
  } catch (error) {
    yield put(loginError(error));
  }
}

export function* loginSuccessAsync(action: LoginActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('Login Success');
  }
}
export function* loginErrorAsync(action: LoginActionError) {
  const data = action.payload;
}

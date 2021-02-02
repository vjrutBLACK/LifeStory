import * as actionTypes from '@screens/Auth/redux/action-types';
import {loginAsync, loginErrorAsync, loginSuccessAsync} from '@screens/Auth/redux/sagas/login';
import {registerAsync} from '@screens/Auth/redux/sagas/register';
import {all, takeLatest} from 'redux-saga/effects';

export default function* authSaga() {
  return all([
    yield takeLatest(actionTypes.REGISTER, registerAsync),
    yield takeLatest(actionTypes.LOGIN, loginAsync),
    yield takeLatest(actionTypes.LOGIN_SUCCESS, loginSuccessAsync),
    yield takeLatest(actionTypes.LOGIN_ERROR, loginErrorAsync),
  ]);
}

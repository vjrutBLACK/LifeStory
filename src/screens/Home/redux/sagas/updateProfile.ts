import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {UpdateProfileAction, UpdateProfileActionError, UpdateProfileActionSuccess, UpdateProfileInput} from '../action-types';
import {updateProfileSuccess, updateProfileError} from '../actions';

export function* updateProfileAsync(action: UpdateProfileAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.updateProfileApi, action.payload as UpdateProfileInput);
    console.log('payload', payload);
    yield put(updateProfileSuccess(payload));
  } catch (error) {
    yield put(updateProfileError(error));
  }
}

export function* updateProfileSuccessAsync(action: UpdateProfileActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('updateProfile Success');
  }
}
export function* updateProfileErrorAsync(action: UpdateProfileActionError) {
  const data = action.payload;
}

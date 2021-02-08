import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {UpdateAvatarAction, UpdateAvatarActionError, UpdateAvatarActionSuccess} from '../action-types';
import {updateAvatarSuccess, updateAvatarError} from '../actions';

export function* updateAvatarAsync(action: UpdateAvatarAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.updateAvatarApi, action.payload as string);
    console.log('payload', payload);
    yield put(updateAvatarSuccess(payload));
  } catch (error) {
    yield put(updateAvatarError(error));
  }
}

export function* updateAvatarSuccessAsync(action: UpdateAvatarActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('updateAvatar Success');
  }
}
export function* updateAvatarErrorAsync(action: UpdateAvatarActionError) {
  const data = action.payload;
}

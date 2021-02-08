import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {AddExistingProfileAction, AddExistingProfileActionError, AddExistingProfileActionSuccess, AddExistingProfileInput} from '../action-types';
import {addExistingProfileSuccess, addExistingProfileError} from '../actions';

export function* addExistingProfileAsync(action: AddExistingProfileAction) {
  try {
    const payload = yield call(apis.addExistingProfileApi, action.payload as AddExistingProfileInput);
    console.log('payload', payload);
    yield put(addExistingProfileSuccess(payload));
  } catch (error) {
    yield put(addExistingProfileError(error));
  }
}

export function* addExistingProfileSuccessAsync(action: AddExistingProfileActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('addExistingProfile Success');
  }
}
export function* addExistingProfileErrorAsync(action: AddExistingProfileActionError) {
  const data = action.payload;
}

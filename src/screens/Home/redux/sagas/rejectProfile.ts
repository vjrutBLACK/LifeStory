import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {RejectProfileAction, RejectProfileActionError, RejectProfileActionSuccess, RejectProfileInput} from '../action-types';
import {rejectProfileSuccess, rejectProfileError} from '../actions';

export function* rejectProfileAsync(action: RejectProfileAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.rejectProfileApi, action.payload as RejectProfileInput);
    console.log('payload', payload);
    yield put(rejectProfileSuccess(payload));
  } catch (error) {
    yield put(rejectProfileError(error));
  }
}

export function* rejectProfileSuccessAsync(action: RejectProfileActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('rejectProfile Success');
  }
}
export function* rejectProfileErrorAsync(action: RejectProfileActionError) {
  const data = action.payload;
}

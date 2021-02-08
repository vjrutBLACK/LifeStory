import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {ApproveProfileAction, ApproveProfileActionError, ApproveProfileActionSuccess} from '../action-types';
import {approveProfileSuccess, approveProfileError} from '../actions';
import {ApproveProfileInput} from '../action-types/ApproveProfile';

export function* approveProfileAsync(action: ApproveProfileAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.approveProfileApi, action.payload as ApproveProfileInput);
    yield put(approveProfileSuccess(payload));
  } catch (error) {
    yield put(approveProfileError(error));
  }
}

export function* approveProfileSuccessAsync(action: ApproveProfileActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('approveProfile Success');
  }
}
export function* approveProfileErrorAsync(action: ApproveProfileActionError) {
  const data = action.payload;
}

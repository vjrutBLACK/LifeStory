import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {UploadFilesAction, UploadFilesActionError, UploadFilesActionSuccess} from '../action-types';
import {uploadFilesSuccess, uploadFilesError} from '../actions';

export function* uploadFilesAsync(action: UploadFilesAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.uploadFilesApi, action.payload);
    console.log('payload', payload);
    yield put(uploadFilesSuccess(payload));
  } catch (error) {
    yield put(uploadFilesError(error));
  }
}

export function* uploadFilesSuccessAsync(action: UploadFilesActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('uploadFiles Success');
  }
}
export function* uploadFilesErrorAsync(action: UploadFilesActionError) {
  const data = action.payload;
}

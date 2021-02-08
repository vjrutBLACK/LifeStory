import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {GetFilesByTimelineOfUserPagingAction, GetFilesByTimelineOfUserPagingActionError, GetFilesByTimelineOfUserPagingActionSuccess} from '../action-types';
import {getFilesByTimelineOfUserPagingSuccess, getFilesByTimelineOfUserPagingError} from '../actions';
import {GetFilesByTimelineOfUserPagingState, GetFilesByTimelineOfUserPagingInput} from '../action-types/GetFilesByTimelineOfUserPaging';

export function* getFilesByTimelineOfUserPagingAsync(action: GetFilesByTimelineOfUserPagingAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.getFilesByTimelineOfUserPagingApi, action.payload as GetFilesByTimelineOfUserPagingInput);
    console.log('payload', payload);
    yield put(getFilesByTimelineOfUserPagingSuccess(payload));
  } catch (error) {
    yield put(getFilesByTimelineOfUserPagingError(error));
  }
}

export function* getFilesByTimelineOfUserPagingSuccessAsync(action: GetFilesByTimelineOfUserPagingActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('getFilesByTimelineOfUserPaging Success');
  }
}
export function* getFilesByTimelineOfUserPagingErrorAsync(action: GetFilesByTimelineOfUserPagingActionError) {
  const data = action.payload;
}

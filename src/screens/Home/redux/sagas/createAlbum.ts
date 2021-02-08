import {SnackbarService} from '@helpers/snackbar';
import * as apis from '@screens/Home/services/apis';
import {call, put} from 'redux-saga/effects';
import {CreateAlbumAction, CreateAlbumActionError, CreateAlbumActionSuccess} from '../action-types';
import {createAlbumSuccess, createAlbumError} from '../actions';
import {CreateAlbumInput} from '../action-types/CreateAlbum';

export function* createAlbumAsync(action: CreateAlbumAction) {
  console.log('a', action.payload);
  try {
    const payload = yield call(apis.createAlbumApi, action.payload as CreateAlbumInput);
    console.log('payload', payload);
    yield put(createAlbumSuccess(payload));
  } catch (error) {
    yield put(createAlbumError(error));
  }
}

export function* createAlbumSuccessAsync(action: CreateAlbumActionSuccess) {
  if (action?.payload) {
    SnackbarService.displaySuccessMessage('createAlbum Success');
  }
}
export function* createAlbumErrorAsync(action: CreateAlbumActionError) {
  const data = action.payload;
}

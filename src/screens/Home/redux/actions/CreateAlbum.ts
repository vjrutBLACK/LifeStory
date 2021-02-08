import {AppError} from '@shared/types';
import {CreateAlbumActionTypes, CREATE_ALBUM, CREATE_ALBUM_ERROR, CREATE_ALBUM_SUCCESS, CreateAlbumInput} from '../action-types/CreateAlbum';

export const createAlbum = (payload: CreateAlbumInput): CreateAlbumActionTypes => ({
  type: CREATE_ALBUM,
  payload,
});

export const createAlbumError = (error: AppError): CreateAlbumActionTypes => ({
  type: CREATE_ALBUM_SUCCESS,
  payload: error,
});

export const createAlbumSuccess = (payload?: any): CreateAlbumActionTypes => ({
  type: CREATE_ALBUM_ERROR,
  payload,
});

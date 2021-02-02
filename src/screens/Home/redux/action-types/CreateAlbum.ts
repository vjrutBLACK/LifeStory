import {AppError} from '@shared/types';

export const CREATE_ALBUM = 'CREATE_ALBUM';
export const CREATE_ALBUM_SUCCESS = 'CREATE_ALBUM_SUCCESS';
export const CREATE_ALBUM_ERROR = 'CREATE_ALBUM_ERROR';

export interface CreateAlbumState {
  loading: boolean;
  payload?: any;
}

export interface CreateAlbumInput {
  ID: string;
  UserId: string;
  AlbumName: string;
  AlbumDescription: string;
  CreatedDate: Date;
}

export interface CreateAlbumAction {
  type: typeof CREATE_ALBUM;
  payload?: CreateAlbumInput;
}

export interface CreateAlbumActionSuccess {
  type: typeof CREATE_ALBUM_SUCCESS;
  payload?: any;
}

export interface CreateAlbumActionError {
  type: typeof CREATE_ALBUM_ERROR;
  payload?: AppError;
}

export type CreateAlbumActionTypes = CreateAlbumAction | CreateAlbumActionSuccess | CreateAlbumActionError;

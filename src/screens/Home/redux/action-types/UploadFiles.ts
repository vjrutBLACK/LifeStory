import {AppError} from '@shared/types';

export const UPLOAD_FILES = 'UPLOAD_FILES';
export const UPLOAD_FILES_SUCCESS = 'UPLOAD_FILES_SUCCESS';
export const UPLOAD_FILES_ERROR = 'UPLOAD_FILES_ERROR';

export interface UploadFilesState {
  loading: boolean;
  payload?: any;
}

export interface UploadFilesAction {
  type: typeof UPLOAD_FILES;
  payload?: string;
}

export interface UploadFilesActionSuccess {
  type: typeof UPLOAD_FILES_SUCCESS;
  payload?: any;
}

export interface UploadFilesActionError {
  type: typeof UPLOAD_FILES_ERROR;
  payload?: AppError;
}

export type UploadFilesActionTypes = UploadFilesAction | UploadFilesActionSuccess | UploadFilesActionError;

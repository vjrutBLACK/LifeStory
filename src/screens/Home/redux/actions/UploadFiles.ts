import {AppError} from '@shared/types';
import {UPLOAD_FILES, UploadFilesActionTypes, UPLOAD_FILES_ERROR, UPLOAD_FILES_SUCCESS} from './../action-types/UploadFiles';

export const uploadFiles = (payload: string): UploadFilesActionTypes => ({
  type: UPLOAD_FILES,
  payload,
});

export const uploadFilesError = (error: AppError): UploadFilesActionTypes => ({
  type: UPLOAD_FILES_SUCCESS,
  payload: error,
});

export const uploadFilesSuccess = (payload?: any): UploadFilesActionTypes => ({
  type: UPLOAD_FILES_ERROR,
  payload,
});

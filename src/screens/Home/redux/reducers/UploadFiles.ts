import {UploadFilesActionTypes, UploadFilesState, UPLOAD_FILES_ERROR, UPLOAD_FILES_SUCCESS} from '../action-types/UploadFiles';
import {UPLOAD_FILES} from './../action-types/UploadFiles';

const initialState = {
  loading: false,
};

export default (state = initialState, action: UploadFilesActionTypes): UploadFilesState => {
  switch (action.type) {
    case UPLOAD_FILES:
      return {
        ...state,
        loading: true,
      };
    case UPLOAD_FILES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case UPLOAD_FILES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

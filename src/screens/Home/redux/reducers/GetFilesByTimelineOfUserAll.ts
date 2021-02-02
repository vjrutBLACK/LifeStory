import {
  GetFilesByTimelineOfUserAllActionTypes,
  GetFilesByTimelineOfUserAllState,
  GET_FILES_BY_TIME_LINE_OF_USER_ALL,
  GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR,
  GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS,
} from '../action-types/GetFilesByTimelineOfUserAll';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetFilesByTimelineOfUserAllActionTypes): GetFilesByTimelineOfUserAllState => {
  switch (action.type) {
    case GET_FILES_BY_TIME_LINE_OF_USER_ALL:
      return {
        ...state,
        loading: true,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

import {
  GetFilesByTimelineOfUserActionTypes,
  GetFilesByTimelineOfUserState,
  GET_FILES_BY_TIME_LINE_OF_USER,
  GET_FILES_BY_TIME_LINE_OF_USER_ERROR,
  GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS,
} from '../action-types/GetFilesByTimelineOfUser';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetFilesByTimelineOfUserActionTypes): GetFilesByTimelineOfUserState => {
  switch (action.type) {
    case GET_FILES_BY_TIME_LINE_OF_USER:
      return {
        ...state,
        loading: true,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
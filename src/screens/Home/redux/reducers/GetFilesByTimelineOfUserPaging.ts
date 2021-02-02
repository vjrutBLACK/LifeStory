import {
  GetFilesByTimelineOfUserPagingActionTypes,
  GetFilesByTimelineOfUserPagingState,
  GET_FILES_BY_TIME_LINE_OF_USER_PAGING,
  GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR,
  GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS,
} from '../action-types/GetFilesByTimelineOfUserPaging';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetFilesByTimelineOfUserPagingActionTypes): GetFilesByTimelineOfUserPagingState => {
  switch (action.type) {
    case GET_FILES_BY_TIME_LINE_OF_USER_PAGING:
      return {
        ...state,
        loading: true,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

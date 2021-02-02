import {
  GetYearTimelinesActionTypes,
  GetYearTimelinesState,
  GET_YEAR_TIME_LINES,
  GET_YEAR_TIME_LINES_SUCCESS,
  GET_YEAR_TIME_LINES_ERROR,
} from './../action-types/GetYearTimelines';

const initialState = {
  loading: false,
};

export default (state = initialState, action: GetYearTimelinesActionTypes): GetYearTimelinesState => {
  switch (action.type) {
    case GET_YEAR_TIME_LINES:
      return {
        ...state,
        loading: true,
      };
    case GET_YEAR_TIME_LINES_SUCCESS:
      return {
        ...state,
        payload: action.payload,
        loading: false,
      };
    case GET_YEAR_TIME_LINES_ERROR:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};

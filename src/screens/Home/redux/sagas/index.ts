import * as actionTypes from '@screens/Home/redux/action-types';
import {all, takeLatest} from 'redux-saga/effects';
import {getFilesByTimelineOfUserAllAsync, getFilesByTimelineOfUserAllErrorAsync, getFilesByTimelineOfUserAllSuccessAsync} from './getFilesByTimelineOfUserAll';
import {getFilesByTimelineOfUserSuccessAsync, getFilesByTimelineOfUserErrorAsync, getFilesByTimelineOfUserAsync} from './getFilesByTimelineOfUser';
import {
  getFilesByTimelineOfUserPagingAsync,
  getFilesByTimelineOfUserPagingSuccessAsync,
  getFilesByTimelineOfUserPagingErrorAsync,
} from './getFilesByTimelineOfUserPaging';
import {getFilesByUserIdAsync, getFilesByUserIdSuccessAsync, getFilesByUserIdErrorAsync} from './getFilesByUserId';
import {getYearTimelinesAsync, getYearTimelinesSuccessAsync, getYearTimelinesErrorAsync} from './getYearTimelines';
import {insertUsersAsync, insertUsersSuccessAsync, insertUsersErrorAsync} from './insertUsers';

export default function* homeSaga() {
  return all([
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_ALL, getFilesByTimelineOfUserAllAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_ALL_SUCCESS, getFilesByTimelineOfUserAllSuccessAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_ALL_ERROR, getFilesByTimelineOfUserAllErrorAsync),

    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER, getFilesByTimelineOfUserAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_SUCCESS, getFilesByTimelineOfUserSuccessAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_ERROR, getFilesByTimelineOfUserErrorAsync),

    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_PAGING, getFilesByTimelineOfUserPagingAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_PAGING_SUCCESS, getFilesByTimelineOfUserPagingSuccessAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_TIME_LINE_OF_USER_PAGING_ERROR, getFilesByTimelineOfUserPagingErrorAsync),

    yield takeLatest(actionTypes.GET_FILES_BY_USER_ID, getFilesByUserIdAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_USER_ID_SUCCESS, getFilesByUserIdSuccessAsync),
    yield takeLatest(actionTypes.GET_FILES_BY_USER_ID_ERROR, getFilesByUserIdErrorAsync),

    yield takeLatest(actionTypes.GET_YEAR_TIME_LINES, getYearTimelinesAsync),
    yield takeLatest(actionTypes.GET_YEAR_TIME_LINES_SUCCESS, getYearTimelinesSuccessAsync),
    yield takeLatest(actionTypes.GET_YEAR_TIME_LINES_ERROR, getYearTimelinesErrorAsync),

    yield takeLatest(actionTypes.INSERT_USER, insertUsersAsync),
    yield takeLatest(actionTypes.INSERT_USER_SUCCESS, insertUsersSuccessAsync),
    yield takeLatest(actionTypes.INSERT_USER_ERROR, insertUsersErrorAsync),
  ]);
}

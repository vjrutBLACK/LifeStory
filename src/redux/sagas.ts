import NetInfo from '@react-native-community/netinfo';
import {netInfoChange} from '@redux/actions';
import * as commonSaga from '@redux/common-saga';
import {eventChannel} from 'redux-saga';
import {all, call, fork, put, take} from 'redux-saga/effects';
import authSaga from '@screens/Auth/redux/sagas';
import homeSaga from '../screens/Home/redux/sagas/index';

function netInfo() {
  console.log('network');
  return eventChannel((emitter) => {
    const unsubscribe = NetInfo.addEventListener((state) => {
      emitter(state);
    });
    return () => {
      unsubscribe();
    };
  });
}

export function* netInfoAsync() {
  const chan = yield call(netInfo);
  try {
    while (1) {
      let netInfo = yield take(chan);
      yield put(netInfoChange(netInfo));
    }
  } finally {
  }
}

export default function* rootSaga() {
  yield fork(netInfoAsync);
  yield all([authSaga(), homeSaga(), commonSaga.checkErrorAsync()]);
}

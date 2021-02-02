import {NetInfoChangeAction, NET_INFO_CHANGE} from '@redux/actions';

export interface AppNetInfoState {
  isInternetReachable: boolean;
  isConnected: boolean;
}
const initialState: AppNetInfoState = {
  isInternetReachable: false,
  isConnected: true,
};

export default (state = initialState, {type, payload}: NetInfoChangeAction): AppNetInfoState => {
  switch (type) {
    case NET_INFO_CHANGE:
      const s = {
        ...state,
        ...payload,
      } as AppNetInfoState;
      return s;

    default:
      return state as AppNetInfoState;
  }
};

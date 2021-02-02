import {NetInfoState} from '@react-native-community/netinfo';
import {Action} from '@redux/actions_type';

export const NET_INFO_CHANGE = 'NET_INFO_CHANGE';
export const APP_STARTED = 'APP_STARTED';
export const APP_STARTED_SUCCESS = 'APP_STARTED_SUCCESS';

export interface NetInfoChangeAction extends Action<NetInfoState> {}
export const netInfoChange = (payload: NetInfoState): NetInfoChangeAction => ({
  type: NET_INFO_CHANGE,
  payload,
});

export const appStart = () => {
  return {
    type: APP_STARTED,
  };
};

export const appStartSuccess = () => {
  return {
    type: APP_STARTED_SUCCESS,
  };
};

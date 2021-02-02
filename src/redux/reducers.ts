import netInfo, {AppNetInfoState} from '@redux/reducer.netinfo';
import {combineReducers} from 'redux';
import auth, {AuthModuleState} from '@screens/Auth/redux/reducers';
import home, {HomeModuleState} from '../screens/Home/redux/reducers/index';

export interface RootState {
  netInfo: AppNetInfoState;
  auth: AuthModuleState;
  home: HomeModuleState;
}

export default combineReducers<RootState>({
  netInfo,
  auth,
  home,
});

import {LoginState, RegisterState} from '@screens/Auth/redux/action-types';
import login from '@screens/Auth/redux/reducers/login';
import {combineReducers} from 'redux';
import register from './register';

export interface AuthModuleState {
  loginState: LoginState;
  registerState: RegisterState;
}

export default combineReducers<AuthModuleState>({
  loginState: login,
  registerState: register,
});

import * as apiCaller from '@services/auth';
import {LoginInput, UserInfo} from '../redux/action-types';
import {RegisterInput, RegisterUser} from '../redux/action-types/register';

export const login = async (data: LoginInput): Promise<UserInfo> => {
  const result = await apiCaller.post<UserInfo, LoginInput>('/api/Users/Logon', data);
  return result;
};

export const register = async (data: RegisterInput): Promise<RegisterUser> => {
  const result = await apiCaller.post<RegisterUser, RegisterInput>(`/api/Users/InsertUsers`, data);
  return result;
};

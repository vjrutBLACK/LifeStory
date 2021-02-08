import AsyncStorage from '@react-native-community/async-storage';
// import {Login_login_user} from 'src/graphql/auth/types/Login';
// import notificationService from './NotificationService';
// import {LoginManager} from 'react-native-fbsdk';
// import {clearStore} from '@/ApolloClient';
import {UserDetail} from '../screens/Auth/redux/action-types/login';

const SAVED_TOKEN_KEY = 'LIFE_STORIES@SAVED_TOKEN_KEY';
const SAVED_REFRESH_TOKEN_KEY = 'LIFE_STORIES@SAVED_REFRESH_TOKEN_KEY';
const SAVED_AUTH_USER = 'LIFE_STORIES@SAVED_AUTH_USER';
const FIRST_TIME_USING_APP = 'LIFE_STORIES@FIRST_TIME_USING_APP';

export class BaseAuthService {
  token?: string;
  refreshToken?: string;
  user?: UserDetail;

  saveTokensAsync = async (token: string, refreshToken: string) => {
    this.token = token;
    this.refreshToken = refreshToken;
    await AsyncStorage.setItem(SAVED_REFRESH_TOKEN_KEY, JSON.stringify({refreshToken}));
    await AsyncStorage.setItem(SAVED_TOKEN_KEY, JSON.stringify({token}));
  };

  saveFirstTimeAsync = async () => {
    await AsyncStorage.setItem(FIRST_TIME_USING_APP, JSON.stringify(Date.now()));
  };

  getFirstTimeUsingApp = async () => {
    const firstTime = await AsyncStorage.getItem(FIRST_TIME_USING_APP);
    return !firstTime;
  };

  saveAuthUserAsync = async (user: UserDetail) => {
    console.log('save', user);
    this.user = user;
    await AsyncStorage.setItem(SAVED_AUTH_USER, JSON.stringify(user));
  };

  getTokens() {
    try {
      const {token, refreshToken} = this;
      return {
        token,
        refreshToken,
      };
    } catch (error) {}
  }

  getAuthUser() {
    const {user} = this;
    return {
      user,
    };
  }

  getAuthUserAsync = async () => {
    const userJson = await AsyncStorage.getItem(SAVED_AUTH_USER);
    if (!userJson) return null;
    const savedUser = JSON.parse(userJson);
    if (savedUser) {
      this.user = savedUser;
    }
    return this;
  };

  getTokensAsync = async () => {
    const tokenJson = await AsyncStorage.getItem(SAVED_TOKEN_KEY);
    const refreshTokenJson = await AsyncStorage.getItem(SAVED_REFRESH_TOKEN_KEY);
    // const isFirstLoginJson = await AsyncStorage.getItem(SAVED_IS_FIRST_LOGIN);
    if (!tokenJson || !refreshTokenJson) return null;
    const savedToken = JSON.parse(tokenJson);
    const savedRefreshToken = JSON.parse(refreshTokenJson);
    if (savedToken && savedRefreshToken) {
      this.refreshToken = savedRefreshToken.refreshToken;
      this.token = savedToken.token;
    }
    return this;
  };

  clearTokensAsync = async () => {
    this.token = undefined;
    this.refreshToken = undefined;
    await AsyncStorage.multiRemove([SAVED_TOKEN_KEY, SAVED_REFRESH_TOKEN_KEY, SAVED_AUTH_USER]);
  };

  clearAuthUserAsync = async () => {
    this.user = undefined;
    await AsyncStorage.removeItem(SAVED_AUTH_USER);
  };

  logout = async () => {
    try {
      // await notificationService.clearToken();
      // await LoginManager.logOut();
      console.log('logout');
      await this.clearTokensAsync();
    } catch (error) {}
  };
}

export default new BaseAuthService();

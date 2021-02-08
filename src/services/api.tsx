import axios from 'axios';
import qs from 'qs';
import Config from 'react-native-config';
import {useDispatch} from 'react-redux';
import BaseAuthService from './authService';
import {SnackbarService} from '@helpers/snackbar';

const instance = axios.create({
  baseURL: Config.SERVER,
  // timeout: 120,
});

async function getLocalToken() {
  const token = await BaseAuthService.getTokensAsync();
  return token;
}

export const get = async <T, V>(url: string): Promise<T> => {
  const token = await BaseAuthService.getTokensAsync();
  return new Promise((resolve, reject) => {
    instance
      .get(url, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token?.token}`,
        },
      })
      .then((res) => {
        console.log(res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log(err);
        if (err.response) {
          if (err.response.status === 401) {
            reject(err.response.status);
          }
          reject(err.response.data);
        } else {
          if (err.request) {
            reject(err.request);
          } else {
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};
const saveTokenAsync = async (access_token: string, refresh_token: string) => {
  await BaseAuthService.saveTokensAsync(access_token, refresh_token);
};
export const deleteApi = async (url: string) => {
  const token = await BaseAuthService.getTokensAsync();
  return new Promise((resolve, reject) => {
    instance
      .delete(url, {
        headers: {
          'Content-type': 'application/json',
          Authorization: `Bearer ${token?.token}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          if (err.request) {
            reject(err.request);
          } else {
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};
export const loginApi = async <T, V>(url: string, variables?: V): Promise<T> => {
  return new Promise((resolve, reject) => {
    instance
      .post(url, qs.stringify(variables), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
        },
      })
      .then((res) => {
        console.log('res', res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log('err', err);
        if (err.response) {
          console.log('err.response', err.response);
          reject(err.response.data);
        } else {
          if (err.request) {
            console.log('request', err.request);
            reject(err.request);
          } else {
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};

export const put = async <T, V>(url: string, variables?: V): Promise<T | number> => {
  const token = await BaseAuthService.getTokensAsync();
  return new Promise((resolve, reject) => {
    instance
      .put(url, JSON.stringify(variables), {
        headers: {
          'content-type': 'application/json',
          Authorization: `Bearer ${token?.token}`,
        },
      })
      .then((res) => {
        if (!res.data) {
          resolve(res.status);
        }
        resolve(res.data);
      })
      .catch((err) => {
        console.log('err', err);
        if (err.response) {
          reject(err.response.data);
          SnackbarService.displayErrorMessage(err.response.data.message);
        } else {
          if (err.request) {
          } else {
            reject(err.request);
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};

export const post = async <T, V>(url: string, variables?: V): Promise<T> => {
  const token = await BaseAuthService.getTokensAsync();
  return new Promise((resolve, reject) => {
    instance
      .post(url, qs.stringify(variables), {
        headers: {
          'content-type': 'application/x-www-form-urlencoded',
          Authorization: `Bearer ${token?.token}`,
        },
      })
      .then((res) => {
        console.log('res', res);
        resolve(res.data);
      })
      .catch((err) => {
        console.log('err', err);
        if (err.response) {
          console.log('err', err.response?.data?.message);
          SnackbarService.displayErrorMessage(err.response?.data?.message);
          reject(err.response.data);
        } else {
          if (err.request) {
            console.log('err', err.request);
            reject(err.request);
          } else {
            console.log('err', err.message);
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};
export const upload = async <T, V>(url: string, variables?: V): Promise<T> => {
  const token = await BaseAuthService.getTokensAsync();

  return new Promise((resolve, reject) => {
    instance
      .post(url, variables, {
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
          Authorization: `Bearer ${token?.token}`,
        },
      })
      .then((res) => {
        resolve(res.data);
      })
      .catch((err) => {
        if (err.response) {
          reject(err.response.data);
        } else {
          if (err.request) {
            reject(err.request);
          } else {
            SnackbarService.displayErrorMessage(err.message);
          }
        }
      });
  });
};

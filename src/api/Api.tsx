// RootProvider.tsx에서 호출

import axios from 'axios';

export default function getAxiosInstance(token: string) {
  const instance = axios.create({
    baseURL: '',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  instance.interceptors.request.use(
    config => {
      if (token && config.headers) {
        config.headers['Authorization'] = 'Bearer ' + token;
      }
      return config;
    },
    error => {
      return Promise.reject(error);
    },
  );

  instance.interceptors.response.use(
    res => {
      return res;
    },
    async err => {
      console.log('Api.tsx');
      console.log(err);
      return Promise.reject(err);
    },
  );
  return instance;
}

import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const loginInUser = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/auth/login',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const register = (payload) => {
  const config = {
    method: 'PUT',
    url: API_HOST_PREFIX + '/auth/register',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

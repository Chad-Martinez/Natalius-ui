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

export const registerUser = (payload) => {
  const config = {
    method: 'PUT',
    url: API_HOST_PREFIX + '/auth/register',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const verifyEmail = (verifyId) => {
  const config = {
    method: 'PUT',
    url: `${API_HOST_PREFIX}/auth/verify/${verifyId}`,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const registerUser = (payload) => {
  const config = {
    method: 'PUT',
    url: API_HOST_PREFIX + '/api/auth/register',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const loginInUser = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/api/auth/login',
    data: payload,
    withCredentials: true,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const logoutUser = (userId) => {
  const config = {
    method: 'PUT',
    url: API_HOST_PREFIX + `/api/auth/logout/${userId}`,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios(config);
};

export const verifyEmail = (verifyId) => {
  const config = {
    method: 'PUT',
    url: `${API_HOST_PREFIX}/api/auth/verify/${verifyId}`,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

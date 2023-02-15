import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const getNewTokens = (userId) => {
  console.log('TOKEN SERVICE FIRING');
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + `/api/token/${userId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  return axios(config);
};

export const invalidateRefreshToken = (userId) => {
  const config = {
    method: 'DELETE',
    url: API_HOST_PREFIX + `/api/token/${userId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  return axios(config);
};

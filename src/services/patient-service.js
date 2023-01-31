import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addPatient = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/patient/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addVitals = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/api/vitals/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios(config);
};

export const getVitals = (patientId) => {
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + `/api/vitals/vitals-by-patient-id/${patientId}`,
    headers: {
      'Content-Type': 'application/json',
    },
    withCredentials: true,
  };
  return axios(config);
};

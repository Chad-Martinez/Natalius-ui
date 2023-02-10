import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addDiagnoses = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/diagnoses/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const getDiagnoses = (patientId) => {
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + `/diagnoses/list/${patientId}`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow': '*',
    },
  };
  return axios(config);
};

export const updateDiagnoses = (payload) => {
  const config = {
    method: 'PUT',
    data: payload,
    url: API_HOST_PREFIX + `/diagnoses/update`,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow': '*',
    },
  };
  return axios(config);
};

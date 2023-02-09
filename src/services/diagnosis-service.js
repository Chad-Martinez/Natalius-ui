import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addDiagnoses = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/diagnosis/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const getDiagonses = (token) => {
  const payload = { currentPage: 1, patientsPerPage: 10 };
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + '/patient/diagnoses/list',
    data: payload,
    crossdomain: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow': '*',
      // 'Authorization': 'Bearer' + token,
    },
  };
  return axios(config);
};

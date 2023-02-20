import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addPatient = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/api/patient/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
  };
  return axios(config);
};

export const getPatients = () => {
  const payload = { currentPage: 1, patientsPerPage: 10 };
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + '/api/patient/list',
    data: payload,
    crossdomain: true,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow': '*',
    },
  };
  return axios(config);
};

export const getPatientById = (patientId) => {
  const config = {
    method: 'GET',
    url: `${API_HOST_PREFIX}/api/patient/patient-by-id/${patientId}`,
    crossdomain: true,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow': '*',
    },
  };
  return axios(config);
};

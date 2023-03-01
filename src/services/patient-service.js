import axios from 'axios';

const API_HOST_PREFIX = 'http://localhost:8080';

export const addNewPatient = (payload) => {
  const config = {
    method: 'POST',
    url: API_HOST_PREFIX + '/api/patient/add',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios(config);
};

export const updateCurrentPatient = (payload) => {
  const config = {
    method: 'PUT',
    url: API_HOST_PREFIX + '/api/patient/update',
    data: payload,
    headers: { 'Content-Type': 'application/json' },
    withCredentials: true,
  };
  return axios(config);
};

export const getPatients = () => {
  const payload = { currentPage: 1, patientsPerPage: 10 };
  const config = {
    method: 'GET',
    url: API_HOST_PREFIX + '/api/patient/list',
    data: payload,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

export const getPatientById = (patientId) => {
  const config = {
    method: 'GET',
    url: `${API_HOST_PREFIX}/api/patient/patient-by-id/${patientId}`,
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
    },
  };
  return axios(config);
};

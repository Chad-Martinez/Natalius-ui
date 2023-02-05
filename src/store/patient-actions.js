import { patientActions } from './patient-slice';
import { toast } from 'react-toastify';
import { getPatients, getPatientById } from '../services/patient-service';

export const loadPatients = (payload) => {
  return async (dispatch) => {
    try {
      const response = await getPatients(payload);
      if (!response.status === 200) {
        throw new Error('Could not retrieve patients. Try reloading the page');
      }
      const data = response.data;
      dispatch(patientActions.setPatientsList(data.patients));
    } catch (error) {
      console.log('LOAD ALL PATIENTS ERROR ', error);
      toast.error('Could not retrieve patients. Try reloading the page');
    }
  };
};

export const loadPatientById = (patientId) => {
  return async (dispatch) => {
    try {
      const response = await getPatientById(patientId);
      if (!response.status === 200) {
        throw new Error('Could not locate patient');
      }
      const data = response.data;
      dispatch(patientActions.setPatient(data.patient));
    } catch (error) {
      console.log('LOAD PATIENT BY ID ERROR ', error);
      toast.error('Could not locate patient');
    }
  };
};

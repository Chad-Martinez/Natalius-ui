import dayjs from 'dayjs';
import { toast } from 'react-toastify';
import { patientActions } from './patient-slice';
import {
  getPatients,
  getPatientById,
  updateCurrentPatient,
  addNewPatient,
} from '../services/patient-service';

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
      if (error.response.status === 401) return;
      toast.error('Could not retrieve patients. Try reloading the page', {
        toastId: 'load-patients-error',
      });
    }
  };
};

export const loadPatientById = (patientId) => {
  return async (dispatch) => {
    try {
      const response = await getPatientById(patientId);
      const data = response.data;

      dispatch(patientActions.setPatient(data.patient));
    } catch (error) {
      console.log('LOAD PATIENT BY ID ERROR ', error);
      if (error.response.status === 401) return;
      toast.error(error.response.data.message, {
        toastId: 'load-patient-error',
      });
    }
  };
};

export const addPatient = (payload, push) => {
  return async (dispatch) => {
    try {
      const response = await addNewPatient(payload);

      const data = response.data;
      dispatch(patientActions.setPatient(data.patient));
      toast.success(response.data.message);
      push(`/patient/view/${data.patient._id}`);
    } catch (error) {
      console.log('ADD PATIENT ERROR ', error);
      if (error.response.status === 401) return;
      toast.error(error.response.data.message, {
        toastId: 'add-patient-error',
      });
    }
  };
};

export const updatePatient = (patientData, push) => {
  return async (dispatch) => {
    try {
      const response = await updateCurrentPatient(patientData);
      const { patient, message } = response.data;
      dispatch(patientActions.setPatient(patient));
      toast.success(message, { toastId: 'update-patient' });
      push(`/patient/view/${patient._id}`);
    } catch (error) {
      console.log('UPDATE PATIENT ERROR ', error);
      if (error.response.status === 401) return;
      toast.error(error.response.data.message, {
        toastId: 'update-patient-error',
      });
    }
  };
};

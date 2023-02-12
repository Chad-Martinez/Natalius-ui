import { diagnosesActions } from './diagnoses-slice';
import { toast } from 'react-toastify';
import {
  getDiagnoses,
  addDiagnoses,
  updateDiagnoses,
} from '../services/diagnoses-service';

export const loadDiagnosesByPatient = (payload) => {
  return async (dispatch) => {
    try {
      const response = await getDiagnoses(payload);
      const data = response.data.diagnoses;
      dispatch(diagnosesActions.setDiagnoses(data));
    } catch (error) {
      console.log('ERROR ', error);

      if (error.response.status === 404) {
        return dispatch(
          diagnosesActions.setDiagnoses({
            _id: '',
            diagnoses: [],
          })
        );
      }
      toast.error('Could not load diagnoses. Try again');
    }
  };
};

export const addNewPatientDiagnoses = (payload) => {
  return async (dispatch) => {
    try {
      const response = await addDiagnoses(payload);
      const data = response.data.diagnoses;
      dispatch(diagnosesActions.setDiagnoses(data));
      toast.success('Diagnoses Updated');
    } catch (error) {
      console.log('ERROR ', error);
      toast.error('Could not add diagnoses Try again');
    }
  };
};

export const updatePatientDiagnoses = (payload) => {
  return async (dispatch) => {
    try {
      const response = await updateDiagnoses(payload);
      const data = response.data.diagnoses;
      dispatch(diagnosesActions.setDiagnoses(data));
      toast.success('Diagnoses Updated');
    } catch (error) {
      console.log('ERROR ', error);
      toast.error('Could not update diagnoses Try again');
    }
  };
};

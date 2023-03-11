import { vitalsActions } from './vitals-slice';
import { toast } from 'react-toastify';
import { addVitals, getVitals } from '../services/vitals-service';

export const loadVitalsByPatient = (payload) => {
  return async (dispatch) => {
    try {
      const response = await getVitals(payload);
      const { vitals, patientId } = response.data;
      const vitalsChartData = vitals[vitals.length - 1];
      const priorVitals = vitals[vitals.length - 2];
      dispatch(
        vitalsActions.setAllVitals({
          vitals,
          vitalsChartData,
          priorVitals,
          patientId,
        })
      );
    } catch (error) {
      console.log('GET VITALS ERROR ', error);
      if (error.response.status === 401) return;
      if (error.response.status === 404) {
        return dispatch(
          vitalsActions.setAllVitals({
            patientId: '',
            vitals: [],
            vitalsChartData: {},
            priorVitals: {},
          })
        );
      }
      toast.error(error.response.data.message, { toastId: 'error' });
    }
  };
};

export const addNewVitals = (payload) => {
  return async (dispatch) => {
    try {
      const response = await addVitals(payload);
      const { vitals, patientId } = response.data;
      console.log('RETURNED DATA ', vitals, patientId);
      dispatch(vitalsActions.setAddVitals({ vitals, patientId }));
      toast.success(response.data.message);
    } catch (error) {
      console.log('ADD VITALS ERROR ', error);
      if (error.response.status === 401) return;
      toast.error('Could not add vitals Try again');
    }
  };
};

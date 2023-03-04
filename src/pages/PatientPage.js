import { Fragment, useState } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadPatientById } from '../store/patient-actions';
import { useEffect } from 'react';
import { Avatar, Grid } from '@mui/material';
import defaultAvatar from '../assets/images/avatar-placeholder.webp';
import PatientProfile from '../components/patient/PatientProfile';
import Vitals from '../components/patient/Vitals';
import Diagnoses from '../components/patient/Diagnoses';
import Loader from '../components/ui/Loader';

const PatientPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const patient = useSelector(
    (state) => state.persistedReducer.patients.patient
  );
  const { patientId } = useParams();
  const { _id } = patient;

  useEffect(() => {
    if (_id && _id === patientId) return setIsLoading(false);
    dispatch(loadPatientById(patientId));
    setIsLoading(false);
  }, [patientId, dispatch, _id]);

  const handleEditPatient = () => {
    history.push('/patient/patient-form', {
      patient: patient,
    });
  };

  return (
    <>
      <Grid
        container
        padding={3}
        sx={{
          backgroundColor: 'white',
          height: 'auto',
          overflow: 'auto',
        }}
        item
      >
        {isLoading ? (
          <Loader />
        ) : (
          <Fragment>
            <Grid
              xs={12}
              md={3}
              item
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Avatar
                alt='patient'
                src={patient.photo?.url || defaultAvatar}
                sx={{
                  height: 'auto',
                  width: '100%',
                  border: 2,
                }}
              />
            </Grid>
            <PatientProfile
              patient={patient}
              onEditPatient={handleEditPatient}
            />
            <Vitals patient={patient} />
            <Diagnoses patientId={patientId} />
          </Fragment>
        )}
      </Grid>
    </>
  );
};

export default PatientPage;

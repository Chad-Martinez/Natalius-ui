import { Fragment, useState } from 'react';
import { useParams } from 'react-router-dom';
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
  const dispatch = useDispatch();
  const patient = useSelector(
    (state) => state.persistedReducer.patients.patient
  );
  const { patientId } = useParams();

  useEffect(() => {
    dispatch(loadPatientById(patientId));
    setIsLoading(false);
  }, [patientId, dispatch]);
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
              md={4}
              item
              sx={{
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Avatar
                alt='avatar placeholder'
                src={defaultAvatar}
                sx={{
                  height: '100%',
                  width: '100%',
                  border: 2,
                }}
              />
            </Grid>
            <PatientProfile patient={patient} />
            <Vitals patient={patient} />
            <Diagnoses patientId={patientId} />
          </Fragment>
        )}
      </Grid>
    </>
  );
};

export default PatientPage;

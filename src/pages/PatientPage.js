import { Fragment } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { loadPatientById } from '../store/patient-actions';
import { useEffect } from 'react';
import { Avatar, Grid, styled, Paper } from '@mui/material';
import defaultAvatar from '../assets/images/avatar-placeholder.webp';
import PatientProfile from '../components/patient/PatientProfile';
import Vitals from '../components/patient/Vitals';

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
//   ...theme.typography.body2,
//   padding: theme.spacing(1),
//   textAlign: 'center',
//   color: theme.palette.text.secondary,
// }));

const PatientPage = () => {
  const dispatch = useDispatch();
  const patient = useSelector((state) => state.patients.patient);
  const { patientId } = useParams();

  useEffect(() => {
    dispatch(loadPatientById(patientId));
  }, [patientId, dispatch]);
  return (
    <>
      <Grid
        container
        // spacing={1}
        padding={3}
        sx={{
          backgroundColor: 'white',
          // flexGrow: 1,
          height: 'auto',
          overflow: 'auto',
        }}
        item
      >
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
      </Grid>
    </>
  );
};

export default PatientPage;

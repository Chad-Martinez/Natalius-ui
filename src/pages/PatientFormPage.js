import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Box, Button } from '@mui/material';
import { addPatient } from '../services/patient-service';
import { Fragment, useState } from 'react';
import { toast } from 'react-toastify';
import Loader from '../components/ui/Loader';

import dayjs from 'dayjs';
import PatientContactForm from '../components/forms/PatientContactForm';
import PatientMedicalInfoForm from '../components/forms/PatientMedicalInfoForm';

const PatientFormPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    const zip = data.zip.replace('-', '').trim();
    const dob = dayjs(data.dob).toDate();
    const patientData = { ...data, zip, dob };
    try {
      setIsLoading(true);
      await addPatient(patientData);
      toast.success('Patient created!');
      setIsLoading(false);
      history.push('/patients');
    } catch (error) {
      toast.error('Error adding patient. Please try again');
    }
  };

  return (
    <Container
      component='main'
      sx={{
        backgroundColor: 'white',
        flexGrow: 1,
        height: 'auto',
        overflow: 'auto',
      }}
    >
      {isLoading ? (
        <Loader />
      ) : (
        <Fragment>
          <Typography marginY={2} component='h1' variant='h4' color='primary'>
            Patient Form
          </Typography>
          <Box component='form' noValidate>
            <PatientContactForm control={control} />
            <PatientMedicalInfoForm control={control} />
            <Box
              sx={{
                display: 'flex',
                marginY: 3,
                justifyContent: 'end',
              }}
            >
              {/* <Button
            type='button'
            variant='outlined'
            sx={{
              marginRight: 1,
            }}
          >
            Reset
          </Button> */}
              <Button onClick={handleSubmit(onSubmit)} variant='contained'>
                Add Patient
              </Button>
            </Box>
          </Box>
        </Fragment>
      )}
    </Container>
  );
};

export default PatientFormPage;

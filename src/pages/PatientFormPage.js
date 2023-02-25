import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Box } from '@mui/material';
import { addPatient } from '../store/patient-actions';
import { Fragment, useState } from 'react';
import Loader from '../components/ui/Loader';
import SendIcon from '@mui/icons-material/Send';

import dayjs from 'dayjs';
import PatientContactForm from '../components/forms/PatientContactForm';
import PatientMedicalInfoForm from '../components/forms/PatientMedicalInfoForm';
import { useDispatch } from 'react-redux';

const PatientFormPage = () => {
  const dispatch = useDispatch();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { handleSubmit, control, setValue, clearErrors } = useForm({
    defaultValues: {
      firstName: '',
      mi: '',
      lastName: '',
      phone: '',
      email: '',
      address: '',
      ethnicity: '',
      dob: '',
      age: '',
      heightFeet: '',
      heightInches: '',
      weight: '',
    },
  });
  const history = useHistory();

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const patientData = {
      ...data,
      dob: dayjs(data.dob).toDate(),
      gender: data.gender.label,
      smoker: data.smoker.label,
    };
    dispatch(addPatient(patientData, history.push));
    setIsSubmitting(false);
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
            <PatientContactForm
              control={control}
              setValue={setValue}
              clearErrors={clearErrors}
            />
            <PatientMedicalInfoForm control={control} setValue={setValue} />
            <Box
              sx={{
                display: 'flex',
                marginY: 3,
                justifyContent: 'end',
              }}
            >
              <LoadingButton
                onClick={handleSubmit(onSubmit)}
                loading={isSubmitting}
                loadingPosition='end'
                variant='contained'
                endIcon={<SendIcon />}
              >
                <span>{isSubmitting ? 'Submitting' : 'Submit'}</span>
              </LoadingButton>
            </Box>
          </Box>
        </Fragment>
      )}
    </Container>
  );
};

export default PatientFormPage;

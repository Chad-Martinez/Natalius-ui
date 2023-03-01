import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import LoadingButton from '@mui/lab/LoadingButton';
import { Typography, Container, Box } from '@mui/material';
import { addPatient, updatePatient } from '../store/patient-actions';
import { useState } from 'react';
import SendIcon from '@mui/icons-material/Send';

import dayjs from 'dayjs';
import PatientContactForm from '../components/forms/PatientContactForm';
import PatientMedicalInfoForm from '../components/forms/PatientMedicalInfoForm';

const PatientFormPage = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const {
    _id: patientId,
    address,
    dateCreated,
    email,
    firstName,
    lastName,
    medicalInfo,
    middleInitial,
    phone,
  } = history.location.state?.patient ? history.location.state.patient : {};
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { handleSubmit, control, setValue, setError, clearErrors, getValues } =
    useForm({
      defaultValues: {
        firstName: firstName || '',
        middleInitial: middleInitial || '',
        lastName: lastName || '',
        phone: phone || '',
        email: email || '',
        address: address && Object.keys(address).length > 0 ? address : null,
        ethnicity: medicalInfo?.ethnicity || '',
        dob: medicalInfo?.dob || '',
        age: medicalInfo?.age || '',
        heightFeet: medicalInfo?.heightFeet || '',
        heightInches: medicalInfo?.heightInches || '',
        weight: medicalInfo?.weight || '',
        gender: medicalInfo?.gender || '',
        smoker: medicalInfo?.smoker || '',
      },
    });

  const onSubmit = async (data) => {
    setIsSubmitting(true);
    const medInfo = {
      age: data.age,
      dateCreated: dayjs(medicalInfo?.dateCreated).toDate() || dayjs().toDate(),
      dateUpdated: dayjs().toDate(),
      dob: dayjs(data.dob).toDate(),
      ethnicity: data.ethnicity,
      gender: data.gender,
      heightFeet: data.heightFeet,
      heightInches: data.heightInches,
      smoker: data.smoker,
      weight: data.weight,
    };
    const patientData = {
      address: data.address,
      dateCreated: dayjs(dateCreated).toDate() || dayjs().toDate(),
      dateUpdated: dayjs().toDate(),
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      medicalInfo: medicalInfo?._id || null,
      middleInitial: data.middleInitial,
      phone: data.phone,
    };

    if (patientId)
      dispatch(
        updatePatient(
          { patientId, patient: patientData, medInfo },
          history.push
        )
      );
    else
      dispatch(
        addPatient({ patient: patientData, medicalInfo: medInfo }, history.push)
      );
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
      <Typography marginY={2} component='h1' variant='h4' color='primary'>
        Patient Form
      </Typography>
      <Box component='form' noValidate>
        <PatientContactForm
          control={control}
          setValue={setValue}
          clearErrors={clearErrors}
          setError={setError}
        />
        <PatientMedicalInfoForm
          getValues={getValues}
          control={control}
          setValue={setValue}
          setError={setError}
          clearErrors={clearErrors}
        />
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
    </Container>
  );
};

export default PatientFormPage;

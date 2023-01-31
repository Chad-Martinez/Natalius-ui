import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { Typography, Container, Box, Button, Grid } from '@mui/material';
import { addPatient } from '../../services/patient-service';
import { US_STATES } from '../../util/helpers';
import ZipCodeInput from '../ui/forms/ZipCodeInput';
import { PhoneInputField } from '../ui/forms/PhoneInput';
import InputField from '../ui/forms/InputField';
import SelectInput from '../ui/forms/SelectInput';
import { toast } from 'react-toastify';

const PatientForm = () => {
  const [phone, setPhone] = useState('');
  const [phoneError, setPhoneError] = useState(false);
  const { handleSubmit, control } = useForm();
  const history = useHistory();

  const onSubmit = async (data) => {
    if (phone.length <= 2) {
      return setPhoneError(true);
    }
    const zip = data.zip.replace('-', '').trim();
    const patientData = { ...data, phone, zip };
    try {
      await addPatient(patientData);
      toast.success('Patient created!');
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
      <Typography marginY={2} component='h1' variant='h4' color='primary'>
        Patient Form
      </Typography>
      <Typography marginY={2} component='h1' variant='h6' color='primary'>
        General Information
      </Typography>
      <Box component='form' noValidate>
        <Grid container spacing={1}>
          <Grid item xs={5}>
            <InputField
              label={'First Name'}
              name={'firstName'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Patient requires a first name',
                },
              }}
              autoFocus={true}
            />
          </Grid>
          <Grid item xs={2}>
            <InputField
              label={'Middle Initial'}
              name={'mi'}
              control={control}
            />
          </Grid>
          <Grid item xs={5}>
            <InputField
              label={'Last Name'}
              name={'lastName'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Patient requires a last name',
                },
              }}
            />
          </Grid>
          <Grid item xs={6}>
            <PhoneInputField
              phone={phone}
              phoneError={phoneError}
              setPhone={setPhone}
              setPhoneError={setPhoneError}
              // id={'phone'}
              // phoneError={phoneError}
              // onPhoneNumberChange={phoneChangeHandler}
              // onBlurValidatePhone={validatePhoneOnBlur}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label={'Email'}
              name={'email'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter an email',
                },
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: 'Please enter a valid email',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label={'Address'}
              name={'address'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter an address',
                },
              }}
            />
          </Grid>
          <Grid item xs={12}>
            <InputField
              label={'Address - Line 2'}
              name={'address2'}
              control={control}
            />
          </Grid>
          <Grid item xs={6}>
            <InputField
              label={'City'}
              name={'city'}
              control={control}
              rules={{
                required: {
                  value: true,
                  message: 'Please enter a city',
                },
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <SelectInput
              control={control}
              name={'state'}
              reules={{
                required: true,
              }}
              errorMessage={'Select a state'}
              label='State'
              listArray={US_STATES}
            />
          </Grid>
          <Grid item xs={4}>
            <ZipCodeInput label={'Zip Code'} name={'zip'} control={control} />
          </Grid>
        </Grid>
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
    </Container>
  );
};

export default PatientForm;

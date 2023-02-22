import { Fragment } from 'react';
import { Typography, Grid } from '@mui/material';
import InputField from '../ui/inputs/InputField';
import MaskedInput from '../ui/inputs/MaskedInput';
import GoogleAutoCompleter from './GoogleAutocompeter';

const PatientContactForm = ({ control, setValue, clearErrors }) => {
  return (
    <Fragment>
      <Typography marginY={2} component='h1' variant='h6' color='primary'>
        Contact Information
      </Typography>
      <Grid container spacing={1}>
        <Grid item xs={5}>
          <InputField
            label={'First Name'}
            name={'firstName'}
            control={control}
            isRequired={true}
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
            isRequired={false}
          />
        </Grid>
        <Grid item xs={5}>
          <InputField
            label={'Last Name'}
            name={'lastName'}
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: 'Patient requires a last name',
              },
            }}
          />
        </Grid>
        <Grid item xs={6}>
          <MaskedInput
            mask='(999)999-9999'
            validator='phone'
            label='Phone'
            name='phone'
            control={control}
            isRequired={true}
            errorMessage='Please enter a valid phone number'
          />
        </Grid>
        <Grid item xs={6}>
          <InputField
            label={'Email'}
            name={'email'}
            control={control}
            isRequired={true}
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
          <GoogleAutoCompleter
            label={'Address'}
            setAddress={setValue}
            name={'address'}
            control={control}
            isRequired={true}
            clearErrors={clearErrors}
            rules={{
              required: {
                value: true,
                message: 'Please enter a valid address',
              },
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientContactForm;

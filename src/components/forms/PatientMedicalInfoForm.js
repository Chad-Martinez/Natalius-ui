import { Typography, Grid } from '@mui/material';
import { ETHNICITIES } from '../../util/helpers';
import InputField from '../ui/inputs/InputField';
import SelectInput from '../ui/inputs/SelectInput';
import DatePicker from '../ui/inputs/DatePicker';
import { Fragment } from 'react';

const PatientMedicalInfoForm = ({ control, setValue }) => {
  const calculateAgeHandler = (value) => {
    const today = new Date();
    const dob = new Date(value);
    let age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }
    setValue('age', age);
  };

  return (
    <Fragment>
      <Typography marginY={2} component='h1' variant='h6' color='primary'>
        General Medical Information
      </Typography>
      <Grid container spacing={1} justifyContent={'space-between'}>
        <Grid item xs={12}>
          <SelectInput
            control={control}
            isRequired={true}
            name={'ethnicity'}
            rules={{
              required: true,
            }}
            errorMessage={'Select an ethnicity'}
            label='Ethnicity'
            listArray={ETHNICITIES}
          />
        </Grid>
        <Grid item xs={3}>
          <DatePicker
            control={control}
            name='dob'
            label='DOB'
            onCustomValidate={calculateAgeHandler}
            rules={{
              required: {
                value: true,
                message: 'DOB required',
              },
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <InputField
            label={'Age'}
            name={'age'}
            type='number'
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: 'Age required',
              },
            }}
            disabled={true}
            inputProps={{
              min: 0,
              max: 110,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <InputField
            label={'Height - Feet'}
            name={'heightFeet'}
            type='number'
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: 'Height required',
              },
              max: {
                value: 10,
                message: 'Feet must be less than 10',
              },
            }}
            inputProps={{
              min: 0,
              max: 10,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <InputField
            label={'Height - Inches'}
            name={'heightInches'}
            type='number'
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: 'Height required',
              },
              min: {
                value: 0,
                message: 'Inches must be between 0-12',
              },
              max: {
                value: 12,
                message: 'Inches must be between 0-12',
              },
            }}
            inputProps={{
              min: 0,
              max: 12,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <InputField
            label={'Weight (lbs)'}
            name={'weight'}
            type='number'
            control={control}
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: 'Weight required',
              },
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientMedicalInfoForm;

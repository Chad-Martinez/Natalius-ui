import { Typography, Grid } from '@mui/material';
import { ETHNICITIES } from '../../util/helpers';
import InputField from '../ui/inputs/InputField';
import SelectInput from '../ui/inputs/SelectInput';
import DatePicker from '../ui/inputs/DatePicker';
import { Fragment } from 'react';
import dayjs from 'dayjs';

const PatientMedicalInfoForm = ({ control, setValue, setError, getValues }) => {
  const handleCalculateAge = (value) => {
    const today = new Date();
    const dob = new Date(value);
    let age = today.getFullYear() - dob.getFullYear();
    var m = today.getMonth() - dob.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < dob.getDate())) {
      age--;
    }

    if (age <= 0 || age > 110) {
      age = null;
    }
    setValue('age', age);
  };

  const handleValidateAge = (value) => {
    const currentYear = dayjs().year();
    const birthYear = dayjs(value).year();
    const isTooOld = currentYear - birthYear;
    if (
      dayjs(value).isValid() &&
      Date.parse(value) < Date.now() &&
      isTooOld <= 110
    ) {
      return true;
    } else {
      return 'Invalid Date';
    }
  };

  const handleValidateHeight = () => {
    if (Number(getValues('heightFeet')) === 0) {
      if (Number(getValues('heightInches')) > 0) return true;
      else
        return setError('heightInches', {
          type: 'Inches Error',
          message: 'Must be at least 1 inch',
        });
    }
  };

  const handleValidateWeight = () => {
    if (Number(getValues('weight')) > 0) return true;
    else return 'Must be at least 1lb';
  };

  const genderOptions = [
    { id: 'Male', item: 'Male' },
    { id: 'Female', item: 'Female' },
  ];
  const smokerOptions = [
    { id: 'Yes', item: 'Yes' },
    { id: 'No', item: 'No' },
  ];

  return (
    <Fragment>
      <Typography marginY={2} component='h1' variant='h6' color='primary'>
        General Medical Information
      </Typography>
      <Grid container spacing={1} justifyContent={'space-between'}>
        <Grid item xs={7}>
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
            onCustomValidate={handleCalculateAge}
            rules={{
              required: {
                value: true,
                message: 'DOB required',
              },
              validate: handleValidateAge,
            }}
          />
        </Grid>
        <Grid item xs={2}>
          <InputField
            label={'Age'}
            name={'age'}
            type='number'
            control={control}
            disabled={true}
          />
        </Grid>
        <Grid item xs={2}>
          <SelectInput
            control={control}
            isRequired={true}
            name={'gender'}
            rules={{
              required: {
                value: true,
                message: 'Gender required',
              },
            }}
            label='Gender'
            listArray={genderOptions}
          />
        </Grid>
        <Grid item xs={2}>
          <SelectInput
            control={control}
            isRequired={true}
            name={'smoker'}
            rules={{
              required: {
                value: true,
                message: 'Smoking status required',
              },
            }}
            label='Smoker'
            listArray={smokerOptions}
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
              validate: handleValidateHeight,
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
              max: {
                value: 12,
                message: 'Cannot exceed 12',
              },
              validate: handleValidateHeight,
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
              validate: handleValidateWeight,
            }}
            inputProps={{
              min: 1,
            }}
          />
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientMedicalInfoForm;

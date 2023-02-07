import { Typography, Grid } from '@mui/material';
import { ETHNICITIES } from '../../util/helpers';
import InputField from '../ui/inputs/InputField';
import SelectInput from '../ui/inputs/SelectInput';
import DatePicker from '../ui/inputs/DatePicker';
import { Fragment } from 'react';

const PatientMedicalInfoForm = ({ control }) => {
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

import { Box, Grid, Button, Typography } from '@mui/material';
import { useForm } from 'react-hook-form';
import InputField from '../ui/inputs/InputField';
import SendIcon from '@mui/icons-material/Send';
import dayjs from 'dayjs';
import { Fragment } from 'react';
import { addNewVitals } from '../../store/vitals-actions';
import { useDispatch } from 'react-redux';

const VitalsForm = ({ handleAddVitals, patientId, setOpenForm }) => {
  const dispatch = useDispatch();
  const { handleSubmit, control, getValues, setError } = useForm();

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
  const handleCancel = () => {
    handleAddVitals();
  };
  const onSubmit = (data) => {
    console.log(Math.floor(data.heightFeet));
    const vitals = {
      heightFeet: Math.floor(data.heightFeet),
      heightInches: Math.floor(data.heightInches),
      weight: Math.floor(data.weight),
      systolic: Math.floor(data.systolic),
      diastolic: Math.floor(data.diastolic),
      patientId: patientId,
    };

    dispatch(addNewVitals(vitals));
    setOpenForm(false);
  };
  return (
    <Fragment>
      <Typography
        sx={{ marginBottom: 1 }}
        fontSize={18}
        align='left'
        color='primary'
      >
        Adding vitals for {dayjs().format('ddd DD MMM YYYY').toString()}
      </Typography>
      <Box component={'form'} noValidate>
        <Grid container spacing={1} columns={10}>
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
                  message: 'Required',
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
                  message: 'Required',
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
                  message: 'Required',
                },
                validate: handleValidateWeight,
              }}
              inputProps={{
                min: 1,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <InputField
              control={control}
              name='systolic'
              type='number'
              rules={{
                required: {
                  value: true,
                  message: 'Required',
                },
                min: {
                  value: 40,
                  message: 'Must be higher than 40',
                },
                max: {
                  value: 200,
                  message: 'Cannot exceed 200',
                },
              }}
              label='Systolic'
              isRequired={true}
              inputProps={{
                min: 40,
                max: 200,
              }}
            />
          </Grid>
          <Grid item xs={2}>
            <InputField
              control={control}
              name='diastolic'
              type='number'
              rules={{
                required: {
                  value: true,
                  message: 'Required',
                },
                min: {
                  value: 40,
                  message: 'Must be higher than 40',
                },
                max: {
                  value: 200,
                  message: 'Cannot exceed 200',
                },
              }}
              label='Diastolic'
              isRequired={true}
              inputProps={{
                min: 40,
                max: 200,
              }}
            />
          </Grid>
        </Grid>
        <Box sx={{ marginTop: 2, display: 'flex', justifyContent: 'end' }}>
          <Button
            sx={{ marginRight: 1 }}
            variant='outlined'
            type='button'
            onClick={handleCancel}
          >
            Cancel
          </Button>
          <Button
            type='button'
            onClick={handleSubmit(onSubmit)}
            variant='contained'
            endIcon={<SendIcon />}
          >
            Submit
          </Button>
        </Box>
      </Box>
    </Fragment>
  );
};

export default VitalsForm;

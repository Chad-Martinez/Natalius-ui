import { Grid, Box, Typography } from '@mui/material';
import { Fragment } from 'react';
import { ETHNICITIES } from '../../util/helpers';

const PatientMedicalInfo = ({ medicalInfo }) => {
  console.log('MEDICAL INFO ', medicalInfo);
  let ethnicity = '';
  switch (medicalInfo.ethnicity) {
    case 'E1':
      ethnicity = ETHNICITIES[0].item;
      break;
    case 'E2':
      ethnicity = ETHNICITIES[1].item;
      break;
    case 'E3':
      ethnicity = ETHNICITIES[2].item;
      break;
    case 'E4':
      ethnicity = ETHNICITIES[3].item;
      break;
    case 'E5':
      ethnicity = ETHNICITIES[4].item;
      break;
    default:
      ethnicity = ETHNICITIES[5].item;
      break;
  }

  const { heightFeet, heightInches, weight, age } = medicalInfo;

  return (
    <Fragment>
      <Box marginTop={1} marginBottom={0.5} sx={{ width: '100%' }}>
        <Typography
          width={'100%'}
          variant='h4'
          fontSize={28}
          sx={{
            textDecoration: 'underline',
          }}
          color='primary'
        >
          General Information
        </Typography>
      </Box>
      <Grid container xs={12} item>
        <Grid xs={12} md={4} item>
          <Typography fontSize={20} color='#333333'>
            Ethnicity: {ethnicity}
          </Typography>
        </Grid>
        <Grid xs={4} md={4} item>
          <Typography fontSize={20} color='#000033'>
            Height: {heightFeet}' {heightInches}"
          </Typography>
        </Grid>
        <Grid xs={4} md={4} item>
          <Typography fontSize={20} color='#000033'>
            Weight: {weight} lbs
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Age: {age}
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Sex: Male
          </Typography>
        </Grid>
        <Grid xs={4} item>
          <Typography fontSize={20} color='#000033'>
            Smoker: N
          </Typography>
        </Grid>
      </Grid>
    </Fragment>
  );
};

export default PatientMedicalInfo;

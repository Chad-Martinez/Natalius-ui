import { Container, Typography, Box, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';

import PatientsTable from '../components/patient/PatientsTable';

// refactor table to its own table component
// add a stick header to the table

const PatientsPage = () => {
  return (
    <Container
      component='main'
      sx={{
        backgroundColor: 'white',
        flexGrow: 1,
        height: 'auto%',
        overflow: 'auto',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography marginTop={2} component='h1' variant='h4' color='primary'>
          Patient's Page
        </Typography>
        <Link component={RouterLink} to='/patient/patient-form'>
          <Button
            sx={{
              marginY: 2,
            }}
            variant='contained'
          >
            Add Patient
          </Button>
        </Link>
      </Box>
      <PatientsTable />
    </Container>
  );
};

export default PatientsPage;

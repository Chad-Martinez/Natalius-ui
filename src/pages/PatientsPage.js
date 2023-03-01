import { useState, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container, Typography, Box, Button, Link } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { loadPatients } from '../store/patient-actions';
import PatientsTable from '../components/patient/PatientsTable';

const PatientsPage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const dispatch = useDispatch();

  const getAllPatients = useCallback(async () => {
    dispatch(loadPatients());
    setIsLoading(false);
  }, [dispatch]);

  useEffect(() => {
    getAllPatients();
  }, [getAllPatients]);

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
      <PatientsTable isLoadingPatients={isLoading} />
    </Container>
  );
};

export default PatientsPage;

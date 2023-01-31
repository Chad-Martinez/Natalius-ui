import {
  Container,
  Typography,
  Box,
  Button,
  Paper,
  Stack,
  TableRow,
  TableCell,
  TableBody,
  TableContainer,
  Table,
  TableHead,
  Link,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'left',
  display: 'flex',
  justifyContent: 'space-between',
  color: theme.palette.text.secondary,
}));

const PATIENTS = [
  {
    id: '1',
    fullName: 'James Dunson',
    dob: '12/01/2000',
    height: `5'10"`,
    weight: '210',
  },
  {
    id: '2',
    fullName: 'Francis Smith',
    dob: '12/01/2000',
    height: `5'10"`,
    weight: '210',
  },
  {
    id: '3',
    fullName: 'Hurty McGurty',
    dob: '12/01/2000',
    height: `5'10"`,
    weight: '210',
  },
  {
    id: '4',
    fullName: 'Samson Gloomy',
    dob: '12/01/2000',
    height: `5'10"`,
    weight: '210',
  },
];

// remove stack code
// refactor table to its own table component
// add a stick header to the table

const PatientsPage = () => {
  const mappedPatients = PATIENTS.map((patient) => (
    <TableRow
      key={patient.id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        {patient.fullName}
      </TableCell>
      <TableCell align='right'>{patient.dob}</TableCell>
      <TableCell align='right'>{patient.height}</TableCell>
      <TableCell align='right'>{patient.weight}</TableCell>
      <TableCell align='right'>
        <Button variant='contained' size='small'>
          View
        </Button>
      </TableCell>
    </TableRow>
  ));
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
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
        }}
      >
        <Typography marginTop={2} component='h1' variant='h4' color='primary'>
          Patient's Page
        </Typography>
        <Link component={RouterLink} to='/patients/patient-form'>
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
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Patient Name</TableCell>
              <TableCell align='right'>Date of Birth</TableCell>
              <TableCell align='right'>Height</TableCell>
              <TableCell align='right'>Weight</TableCell>
              <TableCell align='right'></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>{mappedPatients}</TableBody>
        </Table>
      </TableContainer>
      {/* <Stack spacing={1}>
        <Item>
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-around',
              alignItems: 'center',
            }}
          >
            <Box>Name</Box>
            <Box>DOB</Box>
            <Box>Height:</Box>
            <Box>Weight</Box>
          </Container>
          <Button variant='contained' size='small'>
            View
          </Button>
        </Item>
        <Item>
          <Box>James Dunson</Box>
          <Box>DOB: 12/01/2000</Box>
          <Box>Weight: 240</Box>
          <Box>Height: 5'6"</Box>
        </Item>
        {mappedPatients} */}
      {/* </Stack> */}
    </Container>
  );
};

export default PatientsPage;

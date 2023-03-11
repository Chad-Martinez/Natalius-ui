import { useHistory } from 'react-router-dom';
import { TableRow, TableCell, Button, Avatar, Box } from '@mui/material';
import dayjs from 'dayjs';
const PatientTableItem = ({ patient }) => {
  const history = useHistory();
  const viewPatientHandler = () => {
    history.push(`/patient/view/${patient._id}`);
  };

  const dob = dayjs(patient.medicalInfo.dob).format('MM/DD/YY');

  return (
    <TableRow
      key={patient._id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Avatar
            sx={{ marginRight: 1, bgcolor: '#8dbceba1' }}
            src={patient.photo?.url}
            alt={`${patient.firstName} ${patient.lastName}`}
          />
          {`${patient.firstName} ${patient.lastName}`}
        </Box>
      </TableCell>
      <TableCell align='right'>{dob}</TableCell>
      <TableCell align='right'>{`${patient.medicalInfo.heightFeet}' ${patient.medicalInfo.heightInches}"`}</TableCell>
      <TableCell align='right'>{patient.medicalInfo.weight}</TableCell>
      <TableCell align='right'>
        <Button
          variant='contained'
          color='info'
          size='small'
          onClick={viewPatientHandler}
        >
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PatientTableItem;

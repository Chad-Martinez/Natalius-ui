import { useHistory } from 'react-router-dom';
import { TableRow, TableCell, Button } from '@mui/material';
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
        {`${patient.firstName} ${patient.lastName}`}
      </TableCell>
      <TableCell align='right'>{dob}</TableCell>
      <TableCell align='right'>{`${patient.medicalInfo.heightFeet}' ${patient.medicalInfo.heightInches}"`}</TableCell>
      <TableCell align='right'>{patient.medicalInfo.weight}</TableCell>
      <TableCell align='right'>
        <Button variant='contained' size='small' onClick={viewPatientHandler}>
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PatientTableItem;

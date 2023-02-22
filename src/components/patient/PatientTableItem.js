import { useHistory } from 'react-router-dom';
import { TableRow, TableCell, Button } from '@mui/material';
const PatientTableItem = ({ patient }) => {
  const history = useHistory();
  const viewPatientHandler = () => {
    history.push(`/patient/view/${patient._id}`);
  };

  return (
    <TableRow
      key={patient._id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        {`${patient.firstName} ${patient.lastName}`}
      </TableCell>
      <TableCell align='right'>{'01/01/2000'}</TableCell>
      <TableCell align='right'>{`5'10"`}</TableCell>
      <TableCell align='right'>{'200'}</TableCell>
      <TableCell align='right'>
        <Button variant='contained' size='small' onClick={viewPatientHandler}>
          View
        </Button>
      </TableCell>
    </TableRow>
  );
};

export default PatientTableItem;

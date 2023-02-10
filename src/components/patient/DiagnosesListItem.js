import { TableRow, TableCell, Button } from '@mui/material';
import dayjs from 'dayjs';

const DiagnosesListItem = ({ diagnosis }) => {
  return (
    <TableRow
      key={diagnosis._id}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell component='th' scope='row'>
        {diagnosis.name}
      </TableCell>
      <TableCell align='right'>Scott Dorn, PA-C</TableCell>
      <TableCell align='right'>
        {dayjs(diagnosis.dateCreated).format('MM/DD/YY')}
      </TableCell>
      <TableCell align='right'>
        <a href={diagnosis.link} target='_blank' rel='noopener noreferrer'>
          <Button variant='contained' size='small' type='button'>
            Diagnosis Info
          </Button>
        </a>
      </TableCell>
    </TableRow>
  );
};

export default DiagnosesListItem;

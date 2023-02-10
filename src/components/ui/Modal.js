import * as React from 'react';
import ReactDom from 'react-dom';
import {
  Container,
  Box,
  Chip,
  Slide,
  Button,
  Dialog,
  DialogTitle,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function ConfirmDiagnoses({ onClose, open, diagnoses, onSubmit }) {
  const handleClose = () => {
    onClose();
  };

  const submitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog onClose={handleClose} open={open} TransitionComponent={Transition}>
      <DialogTitle color='primary' fontSize={28}>
        Confirm Diagnoses Selections
      </DialogTitle>
      <Container disableGutters={true}>
        {diagnoses.map((diagnosis) => (
          <Box
            display={'block'}
            sx={{
              height: '45px',
            }}
            margin={2}
            key={diagnosis._id}
          >
            <Chip
              label={diagnosis.name}
              variant='outlined'
              color='primary'
              sx={{
                height: '100%',
                width: 'auto',
                fontSize: 20,
              }}
            />
          </Box>
        ))}
        <Box
          sx={{
            display: 'flex',
            margin: 2,
            justifyContent: 'end',
            height: '45px',
          }}
        >
          <Button
            type='button'
            variant='outlined'
            sx={{
              marginRight: 1,
            }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant='contained' onClick={submitHandler}>
            Confirm
          </Button>
        </Box>
      </Container>
    </Dialog>
  );
}

const ModalPopUp = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ConfirmDiagnoses {...props} />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ModalPopUp;

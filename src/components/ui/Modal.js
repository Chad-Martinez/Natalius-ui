import * as React from 'react';
import ReactDom from 'react-dom';
import {
  Container,
  Box,
  Slide,
  Button,
  Dialog,
  DialogTitle,
} from '@mui/material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction='up' ref={ref} {...props} />;
});
function ModalPopUp({
  onClose,
  open,
  onSubmit,
  title,
  modalBody,
  enableSubmit,
  submitTitle,
  enableClose,
  closeTitle,
}) {
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
        {title}
      </DialogTitle>
      <Container disableGutters={true}>
        {modalBody}
        <Box
          sx={{
            display: 'flex',
            margin: 2,
            justifyContent: 'end',
            height: '45px',
          }}
        >
          {enableClose && (
            <Button
              type='button'
              variant='outlined'
              sx={{
                marginRight: 1,
              }}
              onClick={handleClose}
            >
              {closeTitle}
            </Button>
          )}
          {enableSubmit && (
            <Button variant='contained' onClick={submitHandler}>
              {submitTitle}
            </Button>
          )}
        </Box>
      </Container>
    </Dialog>
  );
}

const ModalPortal = (props) => {
  return (
    <React.Fragment>
      {ReactDom.createPortal(
        <ModalPopUp {...props} />,
        document.getElementById('overlay-root')
      )}
    </React.Fragment>
  );
};

export default ModalPortal;

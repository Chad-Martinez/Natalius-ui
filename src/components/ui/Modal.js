import * as React from 'react';
import ReactDom from 'react-dom';
import {
  Container,
  Box,
  Slide,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
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
  submitDisabled,
  enableClose,
  closeTitle,
  dialogSize,
  warning,
}) {
  const handleClose = () => {
    onClose();
  };

  const submitHandler = () => {
    onSubmit();
    onClose();
  };

  return (
    <Dialog
      fullWidth={dialogSize ? true : false}
      maxWidth={dialogSize || null}
      onClose={handleClose}
      open={open}
      TransitionComponent={Transition}
    >
      <DialogTitle
        fontSize={28}
        sx={{
          backgroundColor: warning ? '#d32f2f' : '',
          color: warning ? 'white' : '#1976d2',
        }}
      >
        {title}
      </DialogTitle>
      <Container disableGutters={true}>
        <DialogContent>{modalBody}</DialogContent>
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
              color={warning ? 'error' : 'primary'}
              sx={{
                marginRight: 1,
              }}
              onClick={handleClose}
            >
              {closeTitle}
            </Button>
          )}
          {enableSubmit && (
            <Button
              sx={{
                backgroundColor: warning ? '#d32f2f' : '',
              }}
              color={warning ? 'warning' : 'primary'}
              variant='contained'
              disabled={submitDisabled}
              onClick={submitHandler}
            >
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

import { Fragment, useState, useRef } from 'react';
import { Avatar, Typography, Box, TextField, Button } from '@mui/material';
import { AppRegistration } from '@mui/icons-material';
import natalius from '../../assets/images/shell.png';
import {
  validateEmailHelper,
  validatePasswordHelper,
} from '../../util/helpers';

const Register = ({ onSubmit }) => {
  const firstNameRef = useRef('');
  const lastNameRef = useRef('');
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const verifyPasswordRef = useRef('');
  const [firstNameError, setFirstNameError] = useState(false);
  const [lastNameError, setLastNameError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [passwordVerifyError, setPasswordVerifyError] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    if (
      !firstNameError &&
      !lastNameError &&
      !emailError &&
      !passwordError &&
      !passwordVerifyError
    ) {
      onSubmit('REGISTER', {
        firstName: data.get('firstName'),
        lastName: data.get('lastName'),
        email: data.get('email'),
        password: data.get('password'),
        title: 'doctor',
      });
    }
  };

  const fistNameHandler = () => {
    if (firstNameRef.current === '') {
      return setFirstNameError(true);
    }
    setFirstNameError(false);
  };

  const lastNameHandler = () => {
    if (lastNameRef.current === '') {
      return setLastNameError(true);
    }
    setLastNameError(false);
  };

  const emailHandler = () => {
    setEmailError(!validateEmailHelper(emailRef.current));
  };

  const passwordHandler = () => {
    setPasswordError(!validatePasswordHelper(passwordRef.current));
  };

  const verifyPasswordHandler = () => {
    if (passwordRef.current === verifyPasswordRef.current) {
      return setPasswordVerifyError(false);
    }
    setPasswordVerifyError(true);
  };

  return (
    <Fragment>
      <Box
        component='img'
        sx={{
          width: 100,
          marginBottom: 3,
        }}
        src={natalius}
      />
      <Typography component='h1' variant='h5'>
        Register
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='firstName'
          label='First Name'
          name='firstName'
          onChange={(e) => (firstNameRef.current = e.target.value)}
          onBlur={fistNameHandler}
          error={firstNameError}
          helperText={firstNameError && 'Please enter a first name'}
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='lastName'
          label='Last Name'
          name='lastName'
          onChange={(e) => (lastNameRef.current = e.target.value)}
          onBlur={lastNameHandler}
          error={lastNameError}
          helperText={lastNameError && 'Please enter a last name'}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          onChange={(event) => (emailRef.current = event.target.value)}
          onBlur={emailHandler}
          error={emailError}
          helperText={emailError && 'Please enter a valid email address'}
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          onChange={(event) => (passwordRef.current = event.target.value)}
          onBlur={passwordHandler}
          error={passwordError}
          helperText={
            passwordError &&
            'Password must be between 8-15 characters and include one uppercase letter and one symbol'
          }
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='passwordVerify'
          label='Verify Password'
          type='password'
          id='passwordVerify'
          onChange={(event) => (verifyPasswordRef.current = event.target.value)}
          onBlur={verifyPasswordHandler}
          error={passwordVerifyError}
          helperText={
            passwordVerifyError && 'Please verify your password matches'
          }
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
          disabled={
            firstNameError &&
            lastNameError &&
            emailError &&
            passwordError &&
            passwordVerifyError
          }
        >
          Register
        </Button>
      </Box>
    </Fragment>
  );
};

export default Register;

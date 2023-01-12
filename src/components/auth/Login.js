import { Fragment } from 'react';
import { Typography, Box, TextField, Button } from '@mui/material';
import natalius from '../../assets/images/shell.png';

const Login = ({ onSubmit }) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    await onSubmit('LOGIN', {
      email: data.get('email'),
      password: data.get('password'),
    });
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
        Login
      </Typography>
      <Box component='form' onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
        <TextField
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
        />
        <TextField
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          sx={{ mt: 3, mb: 2 }}
        >
          Login
        </Button>
      </Box>
    </Fragment>
  );
};

export default Login;

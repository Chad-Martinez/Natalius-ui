import { authActions } from './auth-slice';
import {
  loginInUser,
  registerUser,
  logoutUser,
} from '../services/auth-service';
import { toast } from 'react-toastify';

export const login = (loginData, push) => {
  return async (dispatch) => {
    try {
      const response = await loginInUser(loginData);
      if (!response.status === 200) {
        throw new Error(
          'Could not authenticate user. Please try again or create an account'
        );
      }
      const userId = response.data;
      dispatch(authActions.setLogin(userId));
      toast.success('Login Successful!', { toastId: 'login' });
      push('/dashboard');
    } catch (error) {
      toast.error(error.response.data.message, { toastId: 'login-error' });
    }
  };
};

export const logout = (userId) => {
  return async (dispatch) => {
    try {
      dispatch(authActions.setLogout());
      toast.success('Logout Successful!', { toastId: 'logout' });
      await logoutUser(userId);
    } catch (error) {
      console.log(error);
      dispatch(authActions.setLogout());
    }
  };
};

export const register = (registrationData) => {
  return async (dispatch) => {
    try {
      await registerUser(registrationData);
      dispatch(authActions.setHasRegistered());
      toast.success(
        'Registration email sent. Please verify your email to continue',
        { toastId: 'register' }
      );
    } catch (error) {
      if (error.response.status === 422) {
        toast.error(error.response.data.data[0].msg, { toastId: '422' });
      } else {
        toast.error('Registration error. Please try again', {
          toastId: 'register-error',
        });
      }
    }
  };
};



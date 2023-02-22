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
      const userId = response.data;
      dispatch(authActions.setLogin(userId));
      toast.success(response.data.message, { toastId: 'login' });
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
      const response = await logoutUser(userId);
      toast.success(response.data.message, { toastId: 'logout' });
    } catch (error) {
      console.log(error);
      dispatch(authActions.setLogout());
      toast.error(error.response.data.message, { toastId: 'logout-error' });
    }
  };
};

export const register = (registrationData) => {
  return async (dispatch) => {
    try {
      const response = await registerUser(registrationData);
      dispatch(authActions.setHasRegistered());
      toast.success(response.data.message, { toastId: 'register' });
    } catch (error) {
      if (error.response.status === 422) {
        toast.error(error.response.data.data[0].msg, { toastId: '422' });
      } else {
        toast.error(error.response.data.message, {
          toastId: 'register-error',
        });
      }
    }
  };
};

import { authActions } from './auth-slice';
import { loginInUser, registerUser } from '../services/auth-service';
import { toast } from 'react-toastify';

export const login = (loginData) => {
  return async (dispatch) => {
    try {
      const response = await loginInUser(loginData);
      if (!response.status === 200) {
        throw new Error(
          'Could not authenticate user. Please try again or create an account'
        );
      }
      const data = response.data;
      const { token, userId } = data;
      dispatch(authActions.setLogin({ token, userId }));
      toast.success('Login Successful!');
    } catch (error) {
      toast.error(error.response.data.message);
    }
  };
};

export const register = (registrationData) => {
  return async (dispatch) => {
    try {
      await registerUser(registrationData);
      dispatch(authActions.setIsRegistered());
      toast.success('User created! Please login to continue');
    } catch (error) {
      if (error.response.status === 422) {
        toast.error(error.response.data.data[0].msg);
      } else {
        toast.error('Registration error. Please try again');
      }
    }
  };
};

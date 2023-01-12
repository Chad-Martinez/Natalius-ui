import { authActions } from './auth-slice';
import { loginInUser, registerUser } from '../services/auth-service';
import { uiActions } from './ui-slice';

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
    } catch (error) {
      dispatch(
        uiActions.showNotification({
          title: 'Error!',
          message: error.response.data.message,
        })
      );
    }
  };
};

export const register = (registrationData) => {
  return async (dispatch) => {
    try {
      await registerUser(registrationData);
      dispatch(authActions.setIsRegistered());
      dispatch(
        uiActions.showNotification({
          title: 'User created',
          message: 'Please login to continue',
        })
      );
    } catch (error) {
      if (error.response.status === 422) {
        dispatch(
          uiActions.showNotification({
            title: 'Registration Error',
            message: error.response.data.data[0].msg,
          })
        );
      } else {
        dispatch(
          uiActions.showNotification({
            title: 'Registration Error',
            message: 'Please try again',
          })
        );
      }
    }
  };
};

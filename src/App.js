import { useSelector, useDispatch } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';
import { isExpired, decodeToken } from 'react-jwt';
import { Cookies } from 'react-cookie';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import { authActions } from './store/auth-slice';
import AuthPage from './pages/AuthPage';
import VerifyPage from './pages/VerifyPage';
import Layout from './components/ui/Layout';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import PatientPage from './pages/PatientPage';
import PatientFormPage from './pages/PatientFormPage';
import NotFound404 from './pages/404Page';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [routes, setRoutes] = useState();
  const isAuthenticated = useSelector(
    (state) => state.persistedReducer.auth.isAuthenticated
  );

  const getRoutes = useCallback(
    (authenticated) => {
      const cookies = new Cookies();
      const refreshToken = cookies.get('RT');
      const isTokenExpired = isExpired(refreshToken);

      let routes = (
        <Switch>
          <Route path='/' exact>
            <AuthPage />
          </Route>
          <Route path='/verify/:verifyId'>
            <VerifyPage />
          </Route>
          <Route path='*'>
            <Redirect to='/' />
          </Route>
        </Switch>
      );

      if (isTokenExpired) {
        if (authenticated) {
          dispatch(authActions.setLogout());
        }
        setRoutes(routes);
        return history.push('/');
      }
      if (!isTokenExpired) {
        routes = (
          <Switch>
            <Route path='/dashboard' exact>
              <DashboardPage />
            </Route>
            <Route path='/patients' exact>
              <PatientsPage />
            </Route>
            <Route path='/patient/view/:patientId'>
              <PatientPage />
            </Route>
            <Route path='/patient/patient-form'>
              <PatientFormPage />
            </Route>
            <Route path='*'>
              <NotFound404 />
            </Route>
          </Switch>
        );
        if (!authenticated) {
          const { userId } = decodeToken(refreshToken);
          dispatch(authActions.setLogin(userId));
          history.push('/dashboard');
        }
        setRoutes(routes);
      }
    },
    [dispatch, history]
  );

  useEffect(() => {
    getRoutes(isAuthenticated);
  }, [isAuthenticated, getRoutes]);

  return (
    <div className='Natalius'>
      <Layout>{routes}</Layout>
      <ToastContainer
        position='top-right'
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme='light'
      />
    </div>
  );
}

export default App;

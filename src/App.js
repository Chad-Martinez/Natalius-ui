import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { Fragment, useEffect } from 'react';
import { isExpired, decodeToken } from 'react-jwt';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect, useHistory } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AuthPage from './pages/AuthPage';
import VerifyPage from './pages/VerifyPage';
import Layout from './components/ui/Layout';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import PatientPage from './pages/PatientPage';
import PatientFormPage from './pages/PatientFormPage';
import { authActions } from './store/auth-slice';

function App() {
  const history = useHistory();
  const dispatch = useDispatch();
  const [cookies, removeCookie] = useCookies();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const expiredToken = isExpired(cookies.RT);
  const token = decodeToken(cookies.RT);

  useEffect(() => {
    if (!expiredToken) {
      dispatch(authActions.setLogin(token.userId));
    } else {
      removeCookie('RT');
      removeCookie('AT');
      history.push('/');
    }
  }, [expiredToken, token, dispatch, history, removeCookie]);

  let routes = (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      {isLoggedIn && (
        <Fragment>
          <Route path='/dashboard' exact>
            <DashboardPage />
          </Route>

          <Route path='/verify/:verifyId'>
            <VerifyPage />
          </Route>
          <Route path='/patients' exact>
            <PatientsPage />
          </Route>
          <Route path='/patients/patient/:patientId'>
            <PatientPage />
          </Route>
          <Route path='/patients/patient/patient-form'>
            <PatientFormPage />
          </Route>
        </Fragment>
      )}
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  );
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

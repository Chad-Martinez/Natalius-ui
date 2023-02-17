import { useSelector, useDispatch } from 'react-redux';
import { useCookies } from 'react-cookie';
import { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';
import { Switch, Route, Redirect } from 'react-router-dom';

import 'react-toastify/dist/ReactToastify.css';
import './App.css';

import AuthPage from './pages/AuthPage';
import VerifyPage from './pages/VerifyPage';
import Layout from './components/ui/Layout';
import DashboardPage from './pages/DashboardPage';
import PatientsPage from './pages/PatientsPage';
import PatientPage from './pages/PatientPage';
import PatientFormPage from './pages/PatientFormPage';

function App() {
  const [routes, setRoutes] = useState();
  const isLoggedIn = useSelector(
    (state) => state.persistedReducer.auth.isLoggedIn
  );

  const getRoutes = (authenticated) => {
    let routes;
    if (authenticated) {
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
        </Switch>
      );
    } else {
      routes = (
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
    }
    setRoutes(routes);
  };

  useEffect(() => {
    getRoutes(isLoggedIn);
  }, [isLoggedIn]);

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

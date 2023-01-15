import { useSelector } from 'react-redux';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import AuthPage from './pages/AuthPage';
import VerifyPage from './pages/VerifyPage';
import Layout from './components/ui/Layout';
import DashboardPage from './pages/DashboardPage';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  let routes = (
    <Switch>
      <Route path='/' exact>
        <AuthPage />
      </Route>
      {isLoggedIn && (
        <Route path='/dashboard' exact>
          <DashboardPage />
        </Route>
      )}
      <Route path='/verify/:verifyId'>
        <VerifyPage />
      </Route>
    </Switch>
  );
  return (
    <div className='Natalius'>
      <Layout>{routes}</Layout>
      <ToastContainer
        position='top-right'
        autoClose={5000}
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

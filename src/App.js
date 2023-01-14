import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import AuthPage from './pages/AuthPage';
import VerifyPage from './pages/VerifyPage';
import Dashboard from './pages/DashboardPage';
import './App.css';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className='Natalius'>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
        </Route>
        {isLoggedIn && (
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        )}
        <Route path='/verify/:verifyId'>
          <VerifyPage />
        </Route>
      </Switch>
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

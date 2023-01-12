import { Switch, Route } from 'react-router-dom';
import { useSelector } from 'react-redux';
import AuthPage from './pages/AuthPage';
import Dashboard from './pages/DashboardPage';
import './App.css';

function App() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className='Patient App'>
      <Switch>
        <Route path='/' exact>
          <AuthPage />
        </Route>
        {isLoggedIn && (
          <Route path='/dashboard' exact>
            <Dashboard />
          </Route>
        )}
      </Switch>
    </div>
  );
}

export default App;

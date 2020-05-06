import React from 'react';
import './App.css';
import './App.sass';
import { Switch, Route, Redirect } from 'react-router-dom';
import PrivateRoute from './components/PrivateRoute';
import { useSelector } from 'react-redux';

import { SignIn, Dashboard } from './pages';

const authRoutes = () => {
  return (
    <Switch>
      <Route path="/sign-in" component={SignIn} />
      <Redirect to={'/sign-in'} />
    </Switch>
  );
};

const PrivateRoutes = () => {
  return (
    <Switch>
      <PrivateRoute exact path="/dashboard" component={Dashboard} />
      <Redirect to={'/dashboard'} />
    </Switch>
  );
};

function App() {
  const user = useSelector((state) => state?.auth?.user);
  return <div className="App">{!user ? authRoutes() : PrivateRoutes()}</div>;
}

export default App;

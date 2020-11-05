import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import { useAuth0 } from '@auth0/auth0-react';
import Home from './components/Home';
import Profile from './components/profile';
import Token from './components/token';

const loading = () => {
  return (
    <h2> Loading </h2>
  )
}

const showError = (message) => {
  return (
    <h2> Error {message} </h2>
  )
}

const App = () => {
  const {
    isLoading,
    error,
    getAccessTokenSilently,
    getIdTokenClaims,
  } = useAuth0();
  
  if (isLoading) {
    return loading()
  }

  if(error) {
    return showError(error.message)
  }

  return (
    <div className="App">
      <h1> This is header </h1>
      <Router>
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <Link to="/token">Token</Link>
            </li>
        </ul>      
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/profile" component={Profile} />
          <Route path="/token" component={Token} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;

import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

const getConfig = () => {
  return (
    {
      clientID: process.env.REACT_APP_CLIENT_ID,
      auth0Domain: process.env.REACT_APP_AUTH0_DOMAIN,
      redirectURI: process.env.REACT_APP_REDIRECT_URI,
      apiAudience: process.env.REACT_APP_API_AUDIENCE,
      authEndpoint: process.env.REACT_APP_AUTH_ENDPOINT,
      tokenEndpoint: process.env.REACT_APP_TOKEN_ENDPOINT,
      logoutURL: process.env.REACT_APP_LOGOUT_URL,
      homeURL: process.env.REACT_APP_HOME,
    }
  )
}


ReactDOM.render(
  <Auth0Provider
    domain={getConfig().auth0Domain}
    clientId={getConfig().clientID}
    audience={getConfig().apiAudience}
    redirectUri={window.location.origin}
    onRedirectCallback='${window.location.origin}/callback'
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

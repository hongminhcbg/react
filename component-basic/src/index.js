import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Auth0Provider } from "@auth0/auth0-react";

ReactDOM.render(
  <Auth0Provider
    domain='dev-1czz2eel.us.auth0.com'
    clientId='L1kcm7d2Ty6EIMUmxxUicMWuAsOBo64F'
    audience='https://dev-1czz2eel.us.auth0.com/api/v2/'
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

import './App.css';
import { Auth0Provider } from '@auth0/auth0-react';
import Login from './login'
import Logout from './logout'
import Profile from './user'

function App() {
  return (
    <div className="App">
      <Auth0Provider
        domain="dev-1czz2eel.us.auth0.com"
        clientId="L1kcm7d2Ty6EIMUmxxUicMWuAsOBo64F"
        redirectUri={window.location.origin}
      >
        <Login />
        <Profile />
        <Logout />
      </Auth0Provider>
    </div>
  );
}

export default App;

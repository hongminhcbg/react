import React, { Component } from 'react';  
import Login from './Login'
import Logout from './Logout'

class App extends Component {

  constructor(props){  
    super(props);  
    this.state = this.getConfig();
    console.log(this.state);         
  } 

  getConfig = () => {
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

  render() {  
    return (
      <div className="App">  
        <h2>React PKCE Flow Example</h2>  
        <Login state={this.state}/>
        <Logout clientID={this.state.clientID} redirectTo={this.state.homeURL} logoutURL={this.state.logoutURL}/>
    </div>
    );  
  }  
}  
export default App;  
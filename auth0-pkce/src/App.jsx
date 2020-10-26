import React, { Component } from 'react';  
import Login from './Login'
import Callback from './Callback'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";  

class App extends Component {

  constructor(props){  
    super(props);  
    this.state = {  
         data: 'www.javatpoint.com',
         AUTH0_CLIENT_ID: 'L1kcm7d2Ty6EIMUmxxUicMWuAsOBo64F',
         AUTH0_DOMAIN: 'dev-1czz2eel.us.auth0.com',
         REDIRECT_URI: 'http://localhost:3000/callback',
         API_AUDIENCE: 'https://dev-1czz2eel.us.auth0.com/api/v2/',   
         AuthEndPoint: 'https://dev-1czz2eel.us.auth0.com/authorize',   
        }
         
    this.handleEvent = function(){
      alert('clicked');
    }
  } 

  render() {  
    return (
      <div className="App">  
        <h2>React PKCE Flow Example</h2>  
        <Router>
          <Switch>

            <Route path="/" component={() => <Login state={this.state}/>} /> 
            <Route path="/callback"  component={() => <Callback />}/> 

          </Switch>
        </Router>  
    </div>
    );  
  }  
}  
export default App;  
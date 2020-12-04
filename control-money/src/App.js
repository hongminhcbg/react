import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './components/Home';
import DashBoard from './components/DashBoard'
function App() {
  return (
    <div>
      <Router>
        <Switch>
        <Route path="/" exact='true'>
            <Home />
          </Route>
          <Route path="/dashboard" exact='true'>
            <DashBoard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;

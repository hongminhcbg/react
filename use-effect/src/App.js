import './App.css';
import User from './User';

const getConfig = () => {
  return (
    {
      secret: process.env.REACT_APP_SECRET,
    }
  );
}

function App() {
  return (
    <div className="App">
      <h1> This is header </h1>
      <User secret={getConfig().secret}/>
    </div>
  );
}

export default App;
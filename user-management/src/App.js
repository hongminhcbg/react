import './App.css';
import Users from './components/Users'
const getConfig = () => {
  return {
    secret: process.env.REACT_APP_SECRET,
  }
}

function App() {
  return (
    <div className="App">
      <div>
        <h1> User management </h1>
        <Users secret={getConfig().secret} />
      </div>
    </div>
  );
}

export default App;

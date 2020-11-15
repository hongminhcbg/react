import './App.css';
import Tasks from './components/Tasks'
const getConfg = () => {
  return {
    secret: process.env.REACT_APP_SECRET,
  }
}

function App() {
  console.log(getConfg().secret);
  return (
    <div className="App">
      <h1> Task management </h1>
      <div className="Container">
        <Tasks secret={getConfg().secret} />
      </div>
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import Board from './components/board';

function App() {
  return (
    <div className='App'>
      <h1 class='app-title'> Tic Tac Toe game </h1>
      <p class='app-slogan'>An amaging game</p>
      <Board />
    </div>
  );
}

export default App;

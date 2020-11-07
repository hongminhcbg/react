import './App.css';
import Apple from './components/Apple'
import Chilli from './components/Chilli'
import User from './components/User'

function App() {
  return (
    <div className="App">
      <div>
        <Apple />
      </div>
      <div>
        <Chilli />
      </div>
      <div>
        <User 
        AvatarURL='https://i.pinimg.com/originals/c8/f7/a8/c8f7a86a5a668cac7a2846073ce4baf3.jpg' 
        FullName='minhnh21111111111111111111'
        HandlerOnlick={() => { 
          alert('clickd')
        }}
        > </User>
      </div>
    </div>
  );
}

export default App;

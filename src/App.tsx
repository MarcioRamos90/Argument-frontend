import Argument from './components/Argument';
import logo from './images/argument.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h2>--------</h2>
        <h1>Argument</h1>
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Argument/>
    </div>
  );
}

export default App;

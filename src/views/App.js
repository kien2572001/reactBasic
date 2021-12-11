import logo from './logo.svg';
import './App.scss';
import Car from './Example/Car'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <Car/>
      </header>
    </div>
  );
}

export default App;

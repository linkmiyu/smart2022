import mairo from './mairo.png';
import './App.css';

function App() {
  const h1Element = {<h1>H! 입니다</h1>};
  const testData = {
    
  };
  return (
    <div className="App">
      <header className="App-header">
        { h1Element }
        <img src={mairo} className="App-logo" alt="logo" />
        <p>
          응애 나 애기 <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

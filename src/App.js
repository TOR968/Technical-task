import earth from './img/earth.png';
import astronaut from './img/astronaut.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Head-name"> TMG </h1>
        <div className="Astronaut-block">
          <img src={astronaut} className="Astronaut" alt="Astronaut" />
        </div>

        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        ></a> */}
        <img src={earth} className="Earth" alt="Earth" />
      </header>
    </div>
  );
}

export default App;

import { useState } from 'react';
import earth from './img/earth.png';
import astronaut from './img/astronaut.png';
import './App.css';

function App() {
  const [animation, setAnimation] = useState(false);
  return (
    <div className="App">
      <header className="App-header">
        <button
          className={!animation ? 'Button' : 'off'}
          onClick={() => setAnimation(!animation)}
        >
          start
        </button>
        <h1 className={animation ? 'Head-name' : 'off'}> TMG </h1>
        <div className={animation ? 'Astronaut-block' : 'off'}>
          <img src={astronaut} className="Astronaut" alt="Astronaut" />
        </div>
        <img
          src={earth}
          className={animation ? 'Earth' : 'Earth-off'}
          alt="Earth"
        />
      </header>
    </div>
  );
}

export default App;

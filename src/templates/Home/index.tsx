import { useState } from 'react';
import './style.css';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <div>
        <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
          <img src="/git-logo.png" className="logo" alt="Git logo" />
        </a>
      </div>
      <h1>GINT - The Git Interface</h1>
      <div className="card">
        <button type="button" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <p>Gint. A Graphical User Interface for Git.</p>
    </div>
  );
}

export default App;

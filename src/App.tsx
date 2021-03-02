import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import Arrows from './Arrows';
import Films from './Films';
import Favorites from './Favorites';


function App() {
  const favorites = useSelector((state: string[]) => state);
  
  return (
    <div className="App">
      <Arrows />
      <Films />
      <Favorites />
      
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
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

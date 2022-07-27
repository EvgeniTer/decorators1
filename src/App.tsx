import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Frame } from './Frame/Frame';

function App() {
  return (
    <div className="App">
      <Frame mode='runtime' height={undefined} width={undefined}/>
    </div>
  );
}

export default App;

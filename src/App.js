import React from 'react';
import { Routes , Route } from 'react-router-dom';
import './App.css';
import UserDetails from './components/UserDetails';

function App() {
  return (
    <div className="App">
      <UserDetails />
    </div>
  );
}

export default App;

/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './routes/Home';
import About from './routes/About';

function App() {
  return (
    <div className="App">
      <h1>Welcome to Ruangguru!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}

export default App;

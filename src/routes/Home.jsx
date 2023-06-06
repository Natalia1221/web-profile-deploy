/* eslint-disable no-unused-vars */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Link to="/about">Go to About page</Link>
    </div>
  );
}

export default Home;

import React, { Component } from 'react';
import './App.css';
import { Routes, Route, Link } from "react-router-dom";

import Navbar from './components/navbar/Narvbar';
import Home from './pages/Home';

function App() {
  return (
    <div>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Login from './login';
import Dashboard from './dashboard';
import Signup from './signup';

function App() {
  return (
      <div>
        <Routes>
        <Route path="/" element={<Login />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/dashboard' element={<Dashboard />}/>
        </Routes>
      </div>
  
  );
}

export default App;

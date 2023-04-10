import React from 'react';
import './App.css'
import { Outlet } from 'react-router-dom';
import Navbar from './Components/Navbar/Navbar';

const App = () => {
  return (
    <div>
      <Navbar/>
      <div>
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default App;
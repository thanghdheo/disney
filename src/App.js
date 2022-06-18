import './App.css';
import Header from './Components/Header';
import Home from './Components/Home';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import React, { Component }  from 'react';
import Detail from './Components/Details';
import Login from './Components/Login';

function App() {
  return (
    <div >
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="detail" element={<Detail />} />
          <Route path="login" element={<Login />} />
          <Route path='detail/:id' element={<Detail />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
import React from 'react'
import "./App.css"
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
import { Outlet } from 'react-router-dom';
function App() {
  return (
    <>
      <Nav/>
      <Outlet/>
    </>
  )
}

export default App

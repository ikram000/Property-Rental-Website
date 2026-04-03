import React from 'react'
import "./App.css"
import Home from './Component/Home/Home';
import Nav from './Component/Nav/Nav';
import Login from './Component/Login/Login';
import Signup from './Component/Signup/Signup';
function App() {
  return (
    <>
      <Nav/>
      <Home/>
      
      <Signup/>
    </>
  )
}

export default App

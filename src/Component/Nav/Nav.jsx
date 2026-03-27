import React, { useState } from 'react'
import "./Nav.css"
import logo from "../../assets/p.jpg"
import { CiSearch } from "react-icons/ci";
import { GiHamburgerMenu } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";

function Nav() {
    let[visible, setvisible]= useState(false)
  return (
    
    <div id='Nav'>
        {visible?<div className="hamburger">
            <div className="ham1">Login</div>
            <div className="ham1">Sign Up</div>
            <div className="ham1">list your home</div>
            <div className="ham1">help center</div>
        </div>:<div></div>}
      <div className="nav1">
        <div className="logo">
            <img src={logo} alt="" width="50px" />
            <h1>Private Property Rental</h1>
        </div>
        <div className="search">
        <input type="text" placeholder='Search Destination' />
       <button>Search<CiSearch /></button>
        </div>
        
      <div className="ham">
        <button id='btn1'>List Your Home</button>
         <button id='btn2' onClick={()=>{
            setvisible(prev=>!prev)
         }}>
             <GiHamburgerMenu id='svg1'/>
             <CgProfile id='svg2' />
             </button>
        
      </div>
      </div>
     <div className="nav2"></div>
    </div>
  )
}

export default Nav

import React from 'react'
import "./Signup.css"
function Signup() {
  return (
    <div id='signup'>
     <form action="">
        <span id='Signup title'>SignUp Page</span>
        <div className='list'>
        <label htmlFor="name">Username</label>
        <input type="text" id='name' required />
         </div>
        <div className='list'>
        <label htmlFor="email">Email</label>
        <input type="text" id='email' required /> 
         </div>
          <div className='list'>
        <label htmlFor="pass1">Password</label>
        <input type="password" id='pass1' required />
         </div>
          <div className='list'>
        <label htmlFor="conpass1"> Confrim Password</label>
        <input type="password" id='conpass1' required />
         </div>
         <button id='Signupbtn'>SignUp</button>
      </form>
             
    </div>
  )
} 

export default Signup

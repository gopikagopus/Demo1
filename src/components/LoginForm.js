import React from 'react'
import ".Loginform.js"

function LoginForm() {

const[email,setEmail]=useState("");
const [password,setPassword]=useState("");


  return (
   <>
   
   <div className="login-container">
    <form className='login-form' onSubmit={handleSubmit}></form>
    <h2>LOGIN</h2>
    <div className='input'>
        <label>Email</label>
        <input 
         type="email"
         placeholder="enter your email"
         value={email}
        />
    </div>
   </div>
   <div className="inputs">
    <label>Password</label>
    <input type="password"
    placeholder='"enter your password'
    value={password}>
    </input>
   </div>
   <button onClick={(e)=>(handleSubmit))}type="submit" className='login-btn'>
    <h2>Login</h2>
   </button>
   </>
  )
}

export default LoginForm
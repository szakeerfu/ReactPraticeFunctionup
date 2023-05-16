import React from 'react'
import {useNavigate  } from 'react-router-dom'

const Login = () => {
  const nevigate = useNavigate()

  function handleRegister () {
    nevigate('/register')
  }
  return (
    <div>
      <h1>
        Welcome to <span style={{ color: 'red' , padding : "1rem" }}>LOGIN PAGE</span>
        <br>
        </br>

        <button onClick={handleRegister} style={{ color: 'red' , padding : "1rem" }} >Register</button>


        
       </h1>
    </div>
  )
}

export default Login
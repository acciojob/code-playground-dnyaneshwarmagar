import React from 'react'

const Login = ({handleLogin,handleLogout,authenticated}) => {
  return (
    <div>
        <p>Login</p>
        <button onClick={()=>{authenticated?handleLogout():handleLogin()}}>{authenticated?"Log Out":"Log In"}</button>
    </div>
  )
}

export default Login
import React from 'react'

const Login = ({handleLogin,handleLogout,authenticated}) => {
  return (
    <div>
        <p>Login</p>
        <button onClick={()=>{authenticated?handleLogout():handleLogin()}}>{authenticated?"Logout":"Login"}</button>
    </div>
  )
}

export default Login
import React from 'react';
import '../styles/Login.css';

const Login = () => {
  return (
    <div>
      <div className="login-header">
        <h3>Login</h3>
      </div>
      <div className="login-input">
        <input className="input-box" type="text" placeholder="Email" />
        <input className="input-box" type="password" placeholder="Password" />
      </div>
      <div className="api-login-buttons">
        <button>Google</button>
        <button>Facebook</button>
      </div>
      <div className="login-buttons">
        <button>Login</button>
        <h5>Don't have account <a href="/">Register</a></h5>
      </div>
    </div>
  )
}

export default Login
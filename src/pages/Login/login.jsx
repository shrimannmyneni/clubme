import React from 'react';
import './login.css';

function Login() {
  return (
    <div className="content">
      <h1>Login to Your Organization</h1>
      <form>
        {/* Email Label with for attribute */}
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          placeholder="example@clubme.org"
          required
        /><br />

        {/* Password Label with for attribute */}
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          placeholder="••••••••"
          required
        /><br />

        <button type="submit">Log In</button>
      </form>

      {/* Forgot Password Link */}
      <div className="forgot-password">
        <a href="/forgot-password">Forgot your password?</a>
      </div>

    </div>
  );
}

export default Login;

// Login.js
import React, { useState } from 'react';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    // Send login request to JSON Server (replace the URL with your JSON Server's users endpoint)
    try {
      const response = await fetch(`http://localhost:3000/users?username=${username}&password=${password}`);
      const users = await response.json();

      if (users.length === 1) {
        const user = users[0];
        onLogin(user); // Pass the user data to the parent component
      } else {
        alert('Invalid credentials. Please try again.');
      }
    } catch (error) {
      console.error('Login Error:', error);
      alert('An error occurred. Please try again later.');
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
        <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

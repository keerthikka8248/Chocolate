import React, { useState } from 'react';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin(email, password);
  };

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Welcome Back!</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
          required
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '80px auto',
    padding: '30px',
    background: '#3e2723', // deep chocolate
    borderRadius: '12px',
    color: '#f3e5ab', // creamy yellow
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '25px',
    color: '#d7ccc8', // light mocha
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#4e342e', // slightly lighter brown
    border: 'none',
    borderRadius: '6px',
    color: '#fffde7', // soft cream text
    outline: 'none',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#795548', // rich cocoa
    color: '#fff8e1',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default LoginPage;

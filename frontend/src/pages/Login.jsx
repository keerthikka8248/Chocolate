import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // for navigation

  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await onLogin(email, password);

    if (result?.success) {
      alert('Login successful!');
      navigate('/products');  // Navigate if successful
    }
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
        <button
          type="button"
          onClick={() => navigate('/register')}
          style={{ ...styles.button, backgroundColor: '#a1887f' }} // lighter brown for contrast
        >
          Register
        </button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '350px',
    margin: '80px auto',
    padding: '30px',
    background: '#3e2723',
    borderRadius: '12px',
    color: '#f3e5ab',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    textAlign: 'center',
    fontSize: '28px',
    marginBottom: '25px',
    color: '#d7ccc8',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
  },
  input: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#4e342e',
    border: 'none',
    borderRadius: '6px',
    color: '#fffde7',
    outline: 'none',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#795548',
    color: '#fff8e1',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default LoginPage;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = ({ onRegister }) => {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '',
    email: '',
    password: '',
    phoneNumber: '',
    street: '',
    city: '',
    state: '',
    zipCode: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Construct the formatted data
    const formattedData = {
      name: form.name,
      email: form.email,
      password: form.password,
      phoneNumber: form.phoneNumber,
      address: {
        street: form.street,
        city: form.city,
        state: form.state,
        zipCode: form.zipCode,
      },
    };
  
    const result = await onRegister(formattedData);  // Await the result
    console.log('Registration result:', result);  // Log the result for debugging
    // Check if the result was successful
    if (result?.success) {
      alert('Registration successful!');
      navigate('/products');  // Navigate if successful
    }
  };
  
  

  return (
    <div style={styles.container}>
      <h2 style={styles.heading}>Create Account</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <input name="name" placeholder="Name" onChange={handleChange} value={form.name} style={styles.input} required />
        <input name="email" type="email" placeholder="Email" onChange={handleChange} value={form.email} style={styles.input} required />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} value={form.password} style={styles.input} required />
        <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} value={form.phoneNumber} style={styles.input} />

        {/* Address Fields */}
        <input name="street" placeholder="Street" onChange={handleChange} value={form.street} style={styles.input} />
        <input name="city" placeholder="City" onChange={handleChange} value={form.city} style={styles.input} />
        <input name="state" placeholder="State" onChange={handleChange} value={form.state} style={styles.input} />
        <input name="zipCode" placeholder="Zip Code" onChange={handleChange} value={form.zipCode} style={styles.input} />

        <button type="submit" style={styles.button}>Register</button>
      </form>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    margin: '70px auto',
    padding: '30px',
    background: '#3e2723',
    color: '#f3e5ab',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '25px',
    fontSize: '28px',
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
    borderRadius: '6px',
    backgroundColor: '#4e342e',
    border: 'none',
    color: '#fffde7',
    outline: 'none',
  },
  button: {
    padding: '12px',
    fontSize: '16px',
    backgroundColor: '#6d4c41',
    color: '#fff8e1',
    border: 'none',
    borderRadius: '6px',
    cursor: 'pointer',
    transition: '0.3s ease',
  },
};

export default RegisterPage;

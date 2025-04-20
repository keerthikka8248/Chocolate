import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const ProfilePage = ({ user, setUser, setIsLoggedIn }) => {
  const [wishlist, setWishlist] = useState([]);
  const [cart, setCart] = useState([]);
  const [orders, setOrders] = useState([]);
  const [editMode, setEditMode] = useState(false);
  const [form, setForm] = useState(user);

  useEffect(() => {
    fetch('/api/user/wishlist').then(res => res.json()).then(setWishlist);
    fetch('/api/user/cart').then(res => res.json()).then(setCart);
    fetch('/api/user/orders').then(res => res.json()).then(setOrders);
  }, []);

  const handleUpdate = async () => {
    const res = await fetch('http://localhost:5000/api/user/update', {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });
    const data = await res.json();
    if (data.success) {
      setUser(data.user);
      setEditMode(false);
      localStorage.setItem('user', JSON.stringify(data.user));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (['street', 'city', 'state', 'zipCode'].includes(name)) {
      setForm(prevForm => ({
        ...prevForm,
        address: {
          ...prevForm.address,
          [name]: value
        }
      }));
    } else {
      setForm({ ...form, [name]: value });
    }
  };

  const navigate = useNavigate();
  const handleLogout = () => {
    setUser(null);
    setIsLoggedIn(false);
    localStorage.removeItem('user');
    navigate('/products');
  };

  return (
    <div style={{ padding: '30px', color: '#3e2723' }}>
      <h2>Welcome, {user.name}</h2>
      <button onClick={handleLogout} style={{ float: 'right', backgroundColor: '#c62828', color: 'white' }}>
        Logout
      </button>

      {editMode ? (
        <>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Name" />
          <input name="email" value={form.email} onChange={handleChange} placeholder="Email" />
          <input name="phoneNumber" value={form.phoneNumber} onChange={handleChange} placeholder="Phone" />
          <input name="street" value={form.address?.street || ''} onChange={handleChange} placeholder="Street" />
          <input name="city" value={form.address?.city || ''} onChange={handleChange} placeholder="City" />
          <input name="state" value={form.address?.state || ''} onChange={handleChange} placeholder="State" />
          <input name="zipCode" value={form.address?.zipCode || ''} onChange={handleChange} placeholder="Zip Code" />
          <button onClick={handleUpdate}>Save</button>
        </>
      ) : (
        <>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phoneNumber}</p>
          <p>Address:</p>
          <p>{user.address?.street}, {user.address?.city}, {user.address?.state} - {user.address?.zipCode}</p>
          <button onClick={() => setEditMode(true)}>Edit Profile</button>
        </>
      )}

      <hr />

      <h3>Wishlist</h3>
      <ul>{wishlist.map(item => <li key={item.id}>{item.name}</li>)}</ul>

      <h3>Cart Items</h3>
      <ul>{cart.map(item => <li key={item.id}>{item.name} - {item.quantity}</li>)}</ul>

      <h3>Orders</h3>
      <ul>{orders.map(order => <li key={order.id}>Order #{order.id} - {order.status}</li>)}</ul>
    </div>
  );
};

export default ProfilePage;

import React,{useState, useEffect} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Register from './pages/Register';
import ProfilePage from './pages/Profile';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 
  const [userData, setUserData] = useState({});
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setIsLoggedIn(true);
      setUserData(JSON.parse(storedUser));
    }
  }, []);

  useEffect(() => {
    fetch('http://localhost:5000/api/products/getProducts')
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Error fetching products:', err));
  }, []);


  const handleLogin = async (email, password) => {
    try {
      const res = await fetch('http://localhost:5000/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });
  
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};
  
      if (res.ok && data.success) {
        setIsLoggedIn(true);
        setUserData(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true };
      } else {
        alert(data.message || 'Login failed');
        return { success: false };
      }
    } catch (error) {
      console.error('Login error:', error);
      alert('Something went wrong during login.');
    }
  };
  

  const handleRegister = async (formData) => {
    try {
      const res = await fetch('http://localhost:5000/api/users/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
  
      const data = await res.json();
  
      if (data.success) {
        setIsLoggedIn(true);
        setUserData(data.user);
        localStorage.setItem('user', JSON.stringify(data.user));
        return { success: true }; // Make sure to return this
      } else {
        alert(data.message || data.error || 'Registration failed');
        return { success: false }; // Return failure result
      }
    } catch (error) {
      console.error('Error in registration:', error);
      alert('Something went wrong during registration.');
      return { success: false }; // Return failure result
    }
  };
  
  

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} searchQuery={searchQuery} setSearchQuery={setSearchQuery}  />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products products = {products} searchQuery={searchQuery} />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Login onLogin={handleLogin} />} />
        <Route path="/register" element={<Register onRegister={handleRegister} /> } />
        <Route path="/profile" element={<ProfilePage user={userData} setUser={setUserData} setIsLoggedIn={setIsLoggedIn} />} />
      </Routes>
      {/* Conditionally render footer */}
      {!['/products/:id', '/order'].some(path => window.location.pathname.includes(path)) && <Footer />}
    
    </Router>
  );
}

export default App;

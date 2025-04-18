import React,{useState} from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import About from './pages/About';
import Login from './pages/Login';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Register from './pages/Register';

function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false); 

  return (
    <Router>
      <Navbar isLoggedIn={isLoggedIn} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        <Route path="/login" element={<Register />} />
      </Routes>
      {/* Conditionally render footer */}
      {!['/products/:id', '/order'].some(path => window.location.pathname.includes(path)) && <Footer />}
    
    </Router>
  );
}

export default App;

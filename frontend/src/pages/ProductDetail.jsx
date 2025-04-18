import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';

const ProductDetail = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:5000/api/products/getProduct/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching product:', error);
        setLoading(false);
      });
  }, [id]);

  const styles = {
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      padding: '40px',
      background: 'linear-gradient(to bottom right, #fff3e0, #d7ccc8)',
      borderRadius: '20px',
      maxWidth: '1000px',
      margin: '50px auto',
      boxShadow: '0 10px 30px rgba(62, 39, 35, 0.2)',
      fontFamily: 'Segoe UI, sans-serif',
      color: '#4e342e',
    },
    imageSection: {
      flex: '1 1 40%',
      textAlign: 'center',
      padding: '20px',
    },
    image: {
      width: '100%',
      maxWidth: '350px',
      borderRadius: '15px',
      boxShadow: '0 5px 15px rgba(62, 39, 35, 0.3)',
      transition: 'transform 0.3s ease',
    },
    detailsSection: {
      flex: '1 1 60%',
      padding: '20px',
    },
    title: {
      fontSize: '36px',
      color: '#3e2723',
      marginBottom: '10px',
    },
    category: {
      fontSize: '16px',
      color: '#6d4c41',
      marginBottom: '10px',
    },
    description: {
      fontSize: '18px',
      color: '#5d4037',
      marginBottom: '20px',
    },
    rating: {
      fontSize: '20px',
      color: '#ffca28',
      marginBottom: '10px',
    },
    price: {
      fontSize: '28px',
      fontWeight: 'bold',
      color: '#388e3c',
      marginBottom: '10px',
    },
    stock: {
      fontSize: '16px',
      marginBottom: '20px',
    },
    buttonGroup: {
      display: 'flex',
      gap: '15px',
    },
    button: {
      backgroundColor: '#6d4c41',
      color: '#fff',
      border: 'none',
      padding: '12px 20px',
      borderRadius: '10px',
      fontSize: '16px',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      gap: '10px',
      transition: 'background 0.3s',
    },
  };

  if (loading) {
    return <div style={{ textAlign: 'center', padding: '50px' }}>Loading...</div>;
  }

  if (!product) {
    return <div style={{ textAlign: 'center', padding: '50px', color: 'red' }}>Product not found.</div>;
  }

  return (
    <div style={styles.container}>
      <div style={styles.imageSection}>
        <img
          src={product.image}
          alt={product.name}
          style={styles.image}
          onMouseOver={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
          onMouseOut={(e) => (e.currentTarget.style.transform = 'scale(1)')}
        />
      </div>
      <div style={styles.detailsSection}>
        <h1 style={styles.title}>{product.name}</h1>
        <p style={styles.category}>Category: {product.category}</p>
        <p style={styles.description}>{product.description}</p>
        <div style={styles.rating}>
          {Array.from({ length: Math.round(product.ratings) }).map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>
        <p style={styles.price}>${product.price}</p>
        <p style={styles.stock}>
          {product.stock > 0 ? `Stock: ${product.stock}` : 'Out of stock'}
        </p>
        <div style={styles.buttonGroup}>
          <button style={styles.button}>
            <FaHeart /> Wishlist
          </button>
          <button style={styles.button}>
            <FaShoppingCart /> Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

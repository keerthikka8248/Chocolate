import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';
import { handleAddToWishlist,handleAddToCart } from '../utils/userActions';

const ProductCard = ({ product, onClick }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '220px',
      textAlign: 'center',
      cursor: 'pointer',
    },
    image: {
      width: '100%',
      height: '180px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    name: {
      fontSize: '18px',
      marginTop: '10px',
      color: '#333',
    },
    price: {
      fontSize: '16px',
      color: '#4CAF50',
      fontWeight: 'bold',
    },
    iconContainer: {
      display: 'flex',
      justifyContent: 'center',
      gap: '15px',
      marginTop: '10px',
    },
    icon: {
      fontSize: '18px',
      color: '#6d4c41',
      cursor: 'pointer',
    },
  };

  const addToWishlist = (e) => {
    e.stopPropagation();
    handleAddToWishlist(product._id);
  };

  const addToCart = (e) => {
    e.stopPropagation();
    handleAddToCart(product._id);
  };

  return (
    <div style={styles.card} onClick={onClick}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <div style={styles.iconContainer}>
        <FaHeart title="Add to Wishlist" style={styles.icon} onClick={addToWishlist} />
        <FaShoppingCart title="Add to Cart" style={styles.icon} onClick={addToCart} />
      </div>
    </div>
  );
};

export default ProductCard;

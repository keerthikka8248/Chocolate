import React from 'react';
import { FaHeart, FaShoppingCart, FaStar } from 'react-icons/fa';
import { handleAddToWishlist,handleAddToCart } from '../utils/userActions';


const ProductDetail = ({ product, closeModal }) => {
  const styles = {
    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      height: '100vh',
      width: '100vw',
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      zIndex: 1000,
    },
    modal: {
      backgroundColor: '#fff3e0',
      display: 'grid',
      gridTemplateColumns: '1fr 1fr',
      maxWidth: '90%',
      width: '900px',
      height: '90vh',
      borderRadius: '20px',
      overflow: 'hidden',
      position: 'relative',
    },
    closeBtn: {
      position: 'absolute',
      top: '15px',
      right: '20px',
      fontSize: '24px',
      background: 'none',
      border: 'none',
      cursor: 'pointer',
      color: '#3e2723',
    },
    imageSection: {
      padding: '20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
    },
    image: {
      width: '100%',
      maxWidth: '350px',
      borderRadius: '10px',
      boxShadow: '0 5px 15px rgba(62, 39, 35, 0.3)',
    },
    details: {
      padding: '30px',
      overflowY: 'auto',
    },
    title: {
      fontSize: '32px',
      marginBottom: '10px',
      color: '#3e2723',
    },
    category: {
      fontSize: '16px',
      marginBottom: '10px',
    },
    description: {
      fontSize: '16px',
      marginBottom: '15px',
    },
    rating: {
      color: '#ffc107',
      marginBottom: '10px',
    },
    price: {
      fontSize: '24px',
      color: '#388e3c',
      marginBottom: '10px',
    },
    stock: {
      fontSize: '14px',
      marginBottom: '20px',
    },
    actions: {
      display: 'flex',
      gap: '15px',
    },
    button: {
      backgroundColor: '#6d4c41',
      color: '#fff',
      border: 'none',
      padding: '10px 16px',
      borderRadius: '8px',
      fontSize: '15px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer',
    },
  };

  const addToWishlist = () => handleAddToWishlist(product._id);
  const addToCart = () => handleAddToCart(product._id);


  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button onClick={closeModal} style={styles.closeBtn}>✖</button>
        <div style={styles.imageSection}>
          <img src={product.image} alt={product.name} style={styles.image} />
        </div>
        <div style={styles.details}>
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
          <div style={styles.actions}>
            <button style={styles.button} onClick={addToWishlist}><FaHeart /> Wishlist</button>
            <button style={styles.button} onClick={addToCart}><FaShoppingCart /> Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;

import React from 'react';

const ProductCard = ({ product }) => {
  const styles = {
    card: {
      backgroundColor: '#fff',
      borderRadius: '10px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      padding: '20px',
      width: '250px',
      textAlign: 'center',
      transition: 'transform 0.3s',
    },
    cardHover: {
      transform: 'translateY(-10px)',
    },
    image: {
      width: '100%',
      height: '200px',
      objectFit: 'cover',
      borderRadius: '10px',
    },
    name: {
      fontSize: '20px',
      marginTop: '10px',
    },
    price: {
      fontSize: '18px',
      color: '#3e2723',
    },
    description: {
      fontSize: '14px',
      color: '#6d4c41',
      marginBottom: '10px',
    },
    button: {
      backgroundColor: '#ff5722',
      color: 'white',
      border: 'none',
      padding: '10px 20px',
      cursor: 'pointer',
      borderRadius: '5px',
      fontSize: '16px',
    },
    buttonHover: {
      backgroundColor: '#e64a19',
    },
  };

  return (
    <div 
      style={styles.card} 
      onMouseEnter={(e) => (e.target.style.transform = 'translateY(-10px)')} 
      onMouseLeave={(e) => (e.target.style.transform = '')}
    >
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3 style={styles.name}>{product.name}</h3>
      <p style={styles.price}>${product.price}</p>
      <p style={styles.description}>{product.description}</p>
      <button 
        style={styles.button} 
        onMouseEnter={(e) => (e.target.style.backgroundColor = '#e64a19')} 
        onMouseLeave={(e) => (e.target.style.backgroundColor = '#ff5722')}
      >
        Add to Cart
      </button>
    </div>
  );
}

export default ProductCard;

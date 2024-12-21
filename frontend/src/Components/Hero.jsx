import React from 'react';
import bg1 from '../assets/images/bg1.jpg';

const Hero = () => {
  const styles = {
    heroImage: {
      backgroundImage: `url(${bg1})`,
      backgroundColor: '#cccccc',
      height: '100vh',
      backgroundPosition: 'center',
      backgroundRepeat: 'no-repeat',
      backgroundSize: 'cover',
      position: 'relative',
    },
    heroText: {
      textAlign: 'center',
      position: 'absolute',
      fontSize: '20px',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      color: 'black',
    },
    ctaButton: {
      backgroundColor: '#622A0F',
      color: '#cccccc',
      border: 'none',
      padding: '10px 20px',
      fontSize: '20px',
      cursor: 'pointer',
      borderRadius: '5px',
    },
  };

  return (
    <div style={styles.heroImage}>
      <div style={styles.heroText}>
        <h1>ChocoHut</h1>
        <p>"Life is like a box of chocolates, full of delightful surprises!"</p>
        <button style={styles.ctaButton}>Explore Now</button>
      </div>
    </div>
  );
};

export default Hero;

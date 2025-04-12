import React from 'react';
import { useNavigate } from 'react-router-dom';
import bk from '../assets/images/img25.jpeg';
import cafe from '../assets/images/img14.jpeg';

const Hero = () => {
  const navigate = useNavigate();

  const styles = {
    heroSection: {
      backgroundImage: `url(${bk})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      position: 'relative',
      overflow: 'hidden',
      color: '#4E342E',
    },
    glassContainer: {
      backdropFilter: 'blur(14px)',
      background: 'rgba(255, 255, 255, 0.15)',
      borderRadius: '20px',
      boxShadow: '0 8px 32px rgba(31, 38, 135, 0.37)',
      border: '1px solid rgba(255, 255, 255, 0.2)',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      width: '85%',
      maxWidth: '1200px',
      padding: '40px',
      animation: 'fadeIn 1.5s ease-in-out',
    },
    left: {
      flex: 1,
      paddingRight: '20px',
      animation: 'slideInLeft 1.2s ease-in-out',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center', // center horizontally
      textAlign: 'center',
    },    
    right: {
      flex: 1,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      animation: 'slideInRight 1.2s ease-in-out',
    },
    heading: {
      fontSize: '52px',
      fontFamily: "'Pacifico', cursive",
      marginBottom: '20px',
      color: '#3E2723',
      textShadow: '1px 1px 3px rgba(0,0,0,0.2)',
    },
    description: {
      fontSize: '20px',
      lineHeight: '1.6',
      maxWidth: '500px',
      color: '#4E342E',
    },
    button: {
      marginTop: '30px',
      padding: '14px 36px',
      fontSize: '18px',
      borderRadius: '30px',
      background:  'linear-gradient(135deg, #F9A825, #FFCC80)',
      color: '#fff',
      border: 'none',
      cursor: 'pointer',
      boxShadow: '0 5px 15px rgba(0,0,0,0.2)',
      transition: 'all 0.4s ease',
      alignSelf: 'center', // centers inside flex column
      fontWeight: 'bold',
      textTransform: 'uppercase',
      letterSpacing: '1px',
    },    
    image: {
      width: '100%',
      maxWidth: '450px',
      maxHeight: '480px',
      objectFit: 'cover',
      borderRadius: '20px',
      boxShadow: '0 6px 15px rgba(0,0,0,0.3)',
      transform: 'scale(1)',
      transition: 'transform 0.3s ease-in-out',
    },
  };

  // Extra effect: on button hover
  const handleMouseEnter = (e) => {
    e.target.style.transform = 'scale(1.05)';
    e.target.style.boxShadow = '0 8px 20px rgba(255, 183, 77, 0.6)';
  };
  
  const handleMouseLeave = (e) => {
    e.target.style.transform = 'scale(1)';
    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
  };
  
  return (
    <>
      <style>
        {`
          @keyframes fadeIn {
            from { opacity: 0; transform: scale(0.95); }
            to { opacity: 1; transform: scale(1); }
          }
          @keyframes slideInLeft {
            from { transform: translateX(-60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
          @keyframes slideInRight {
            from { transform: translateX(60px); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
          }
        `}
      </style>
      <div style={styles.heroSection}>
        <div style={styles.glassContainer}>
          <div style={styles.left}>
            <h1 style={styles.heading}>Welcome to ChocoHut 🍫</h1>
            <p style={styles.description}>
              Dive into a world of indulgence where every bite brings joy. From handcrafted truffles to
              velvety cakes and melt-in-your-mouth macarons, we serve sweetness with love.
            </p>
            <button
              style={styles.button}
              onClick={() => navigate('/products')}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              Explore Now
            </button>
          </div>
          <div style={styles.right}>
            <img src={cafe} alt="Cafe" style={styles.image} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;

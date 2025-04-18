import React from 'react';

const Footer = () => {
  const styles = {
    footer: {
      backgroundColor: '#3e2723',
      color: '#fff',
      padding: '40px 20px',
      fontFamily: "'Roboto', sans-serif",
      width: '100vw',
      overflowX: 'hidden',
      boxShadow: '0 -2px 10px rgba(0, 0, 0, 0.1)',
    },
    container: {
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around',
      alignItems: 'flex-start',
      gap: '30px',
      textAlign: 'left',
    },
    column: {
      flex: '1',
      minWidth: '220px',
    },
    heading: {
      fontSize: '20px',
      fontWeight: 'bold',
      color: '#f5e1a4',
      marginBottom: '15px',
    },
    infoText: {
      fontSize: '16px',
      marginBottom: '10px',
      lineHeight: '1.6',
    },
    socialIconWrapper: {
      display: 'flex',
      gap: '15px',
      alignItems: 'center',
      marginTop: '10px',
    },
    socialIcon: {
      width: '40px',
      height: '40px',
      borderRadius: '50%',
      backgroundColor: '#fff',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      transition: 'transform 0.3s ease, background-color 0.3s ease',
      cursor: 'pointer',
    },
    socialIconImg: {
      width: '22px',
      height: '22px',
    },
    footerBottom: {
      marginTop: '30px',
      textAlign: 'center',
      fontSize: '14px',
      color: '#f5e1a4',
      borderTop: '1px solid #ffffff33',
      paddingTop: '20px',
    }
  };

  return (
    <footer style={styles.footer}>
      <div style={styles.container}>
        <div style={styles.column}>
          <h4 style={styles.heading}>Address</h4>
          <p style={styles.infoText}>123 Cocoa Street<br />Choco City, CA 98765</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Email</h4>
          <p style={styles.infoText}>team@chocohut.com</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Contact Number</h4>
          <p style={styles.infoText}>+123-456-7890</p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Opening Hours</h4>
          <p style={styles.infoText}>
            Mon - Fri: 9:00 AM - 8:00 PM<br />
            Sat - Sun: 10:00 AM - 6:00 PM
          </p>
        </div>

        <div style={styles.column}>
          <h4 style={styles.heading}>Follow Us</h4>
          <div style={styles.socialIconWrapper}>
            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/1200px-Instagram_logo_2022.svg.png"
                alt="Instagram"
                style={styles.socialIconImg}
              />
            </a>

            {/* Facebook */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg"
                alt="Facebook"
                style={styles.socialIconImg}
              />
            </a>

            {/* WhatsApp Group */}
            <a
              href="https://chat.whatsapp.com/your-group-invite-link" // Replace with your actual WhatsApp group link
              target="_blank"
              rel="noopener noreferrer"
              style={styles.socialIcon}
              onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.2)'}
              onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
                alt="WhatsApp"
                style={styles.socialIconImg}
              />
            </a>
          </div>
        </div>
      </div>

      <div style={styles.footerBottom}>
        <p>&copy; 2025 ChocoHut. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;

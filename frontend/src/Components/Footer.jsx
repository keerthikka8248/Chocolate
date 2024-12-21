import React from 'react'

const Footer = () => {
  return (
    <div>
        <footer id="contact" className="footer">
        <h3>Contact Us</h3>
        <p>Phone: +123-456-7890</p>
        <p>Email: support@chocohut.com</p>
        <div className="social-icons">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src="instagram-icon.png" alt="Instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src="facebook-icon.png" alt="Facebook" />
          </a>
        </div>
      </footer>
    </div>
  )
}

export default Footer
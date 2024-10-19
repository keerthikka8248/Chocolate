import React from 'react';
import '../Styles/Home.css'; // Custom CSS file for styling

const Home = () => {
  return (
    <div className="home">
      {/* Header Section */}
      <header className="header">
        <h1>Chocolate Bliss</h1>
        <nav>
          <ul>
            <li><a href="#specials">Our Specials</a></li>
            <li><a href="#reviews">Reviews</a></li>
            <li><a href="#contact">Contact Us</a></li>
          </ul>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-image">
          <img src="your-hero-image.jpg" alt="Delicious Chocolate" />
        </div>
        <div className="hero-text">
          <h2>Indulge in the Richness of Our Chocolates</h2>
          <p>"Life is like a box of chocolates, full of delightful surprises!"</p>
        </div>
      </section>

      {/* Our Specials Section */}
      <section id="specials" className="specials">
        <h2>Our Specials</h2>
        <div className="specials-grid">
          <div className="special-item">
            <img src="brownie.jpg" alt="Brownie" />
            <p>Brownie</p>
          </div>
          <div className="special-item">
            <img src="macroon.jpg" alt="Macaroon" />
            <p>Macaroon</p>
          </div>
          <div className="special-item">
            <img src="dark-chocolate.jpg" alt="Dark Chocolate" />
            <p>Homemade Dark Chocolate</p>
          </div>
          <div className="special-item">
            <img src="choco-truffle.jpg" alt="Choco Truffle Cake" />
            <p>Choco Truffle Cake</p>
          </div>
        </div>
      </section>

      {/* Customer Reviews Section */}
      <section id="reviews" className="reviews">
        <h2>Customer Reviews</h2>
        <div className="reviews-slider">
          <div className="review-slide">
            <p>"Best chocolates I've ever had!" - Jane Doe</p>
          </div>
          <div className="review-slide">
            <p>"The macarons are to die for!" - John Smith</p>
          </div>
          <div className="review-slide">
            <p>"Brownies are rich and delicious." - Lisa Brown</p>
          </div>
          <div className="review-slide">
            <p>"Loved the choco truffle cake!" - Michael Lee</p>
          </div>
          {/* Add more reviews here */}
        </div>
      </section>

      {/* Footer Section */}
      <footer id="contact" className="footer">
        <h3>Contact Us</h3>
        <p>Phone: +123-456-7890</p>
        <p>Email: support@chocolatebliss.com</p>
        <p>
          Follow us: 
          <a href="https://instagram.com">Instagram</a> | 
          <a href="https://facebook.com">Facebook</a>
        </p>
      </footer>
    </div>
  );
};

export default Home;

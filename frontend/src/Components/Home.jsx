import React from 'react';
import '../Styles/Home.css';
import Hero from './Hero';
import Specials from './Specials';
import Reviews from './Reviews';
import Footer from './Footer';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Specials />
      <Reviews />
      <Footer />
    </div>
  );
};

export default Home;

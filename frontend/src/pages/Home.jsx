import React from 'react';
import Hero from '../Components/Hero';
import Specials from '../Components/Specials';
import Reviews from '../Components/Reviews';
import Footer from '../Components/Footer';

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

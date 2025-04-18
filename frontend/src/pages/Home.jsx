import React from 'react';
import Hero from '../Components/Hero';
import Specials from '../Components/Specials';
import Footer from '../Components/Footer';
import CustomerReviews from '../Components/CustomerReviews';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <Specials />
      <CustomerReviews />
    </div>
  );
};

export default Home;

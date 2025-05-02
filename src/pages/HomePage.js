import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProducts from '../components/FeaturedProducts';
import Footer from '../components/Footer';

const HomePage = () => {
  return (
    <>
      <Header />
      <Hero />
      <div className="container">
        <FeaturedProducts />
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
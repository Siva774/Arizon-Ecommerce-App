import React from 'react';
import Header from '../components/Header';
import ProductListing from '../components/ProductListing';
import Footer from '../components/Footer';

const ProductListingPage = () => {
  return (
    <>
      <Header />
      <div className="container py-5">
        <h1 className="mb-4">All Products</h1>
        <ProductListing />
      </div>
      <Footer />
    </>
  );
};

export default ProductListingPage;
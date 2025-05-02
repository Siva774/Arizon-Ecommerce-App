import React, { useEffect, useState } from 'react';
import { Row, Col, Spinner, Alert, Form } from 'react-bootstrap';
import ProductCard from './ProductCard';
import axios from 'axios';

const ProductListing = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [sortBy, setSortBy] = useState('default'); 

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get('https://fakestoreapi.com/products');
        setProducts(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    product.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price_asc':
        return a.price - b.price;
      case 'price_desc':
        return b.price - a.price;
      case 'rating':
        return b.rating.rate - a.rating.rate;
      case 'title':
        return a.title.localeCompare(b.title);
      default:
        return 0; 
    }
  });

  if (loading) {
    return (
      <div className="text-center py-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    return <Alert variant="danger">Error: {error}</Alert>;
  }

  return (
    <div className="container py-4">
      <div className="d-flex justify-content-between mb-4">
        <input
          className="form-control w-50 rounded-pill"
          onChange={(e) => setSearchTerm(e.target.value)}
          type="search"
          placeholder="Search products..."
        />
        <Form.Select
          className="w-25"
          value={sortBy}
          onChange={(e) => setSortBy(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="price_asc">Price (Low to High)</option>
          <option value="price_desc">Price (High to Low)</option>
          <option value="rating">Top Rated</option>
          <option value="title">Alphabetical (A-Z)</option>
        </Form.Select>
      </div>

      <Row xs={1} md={2} lg={3} xl={4} className="g-4">
        {sortedProducts.map((product) => (
          <Col key={product.id}>
            <ProductCard product={product} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ProductListing;
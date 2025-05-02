import React from 'react';
import { Container, Button } from 'react-bootstrap';

const Hero = () => {
  return (
    <div className="bg-dark text-white py-5">
      <Container>
        <div className="py-5">
          <h1 className="display-4 fw-bold">Welcome to Arizon</h1>
          <p className="lead my-4">
            Discover amazing products at unbeatable prices
          </p>
          <Button variant="primary" size="lg" className="mt-3">
            Shop Now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default Hero;
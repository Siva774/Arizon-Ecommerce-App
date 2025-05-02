import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();

  return (
    <Card className="h-100">
      <Card.Img 
        variant="top" 
        src={product.image} 
        style={{ height: '200px', objectFit: 'contain', padding: '10px' }} 
      />
      <Card.Body className="d-flex flex-column">
        <Card.Title className="fs-6">{product.title}</Card.Title>
        <Card.Text className="mt-auto">
          <strong>${product.price.toFixed(2)}</strong>
        </Card.Text>
        <Button 
          variant="primary" 
          onClick={() => addToCart(product)}
          className="mt-2"
        >
          Add to Cart
        </Button>
      </Card.Body>
    </Card>
  );
};

export default ProductCard;
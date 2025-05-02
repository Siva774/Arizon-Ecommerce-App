import React from 'react';
import { Card, ListGroup, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import CartItem from './CartItem';

const MiniCart = () => {
  const { cartItems, cartTotal, setShowMiniCart } = useCart();

  return (
    <Card style={{ width: '300px', position: 'absolute', right: '20px', top: '60px', zIndex: 1000 }}>
      <Card.Header>Shopping Cart</Card.Header>
      <ListGroup variant="flush">
        {cartItems.length === 0 ? (
          <ListGroup.Item>Your cart is empty</ListGroup.Item>
        ) : (
          <>
            {cartItems.map((item) => (
              <CartItem key={item.id} item={item} isMini={true} />
            ))}
            <ListGroup.Item className="d-flex justify-content-between">
              <strong>Subtotal:</strong>
              <span>${cartTotal.toFixed(2)}</span>
            </ListGroup.Item>
            <ListGroup.Item className="d-grid gap-2">
              <Button 
                as={Link} 
                to="/cart" 
                variant="primary" 
                size="sm"
                onClick={() => setShowMiniCart(false)}
              >
                View Cart
              </Button>
              <Button variant="outline-primary" size="sm" disabled={cartItems.length === 0}>
                Checkout
              </Button>
            </ListGroup.Item>
          </>
        )}
      </ListGroup>
    </Card>
  );
};

export default MiniCart;
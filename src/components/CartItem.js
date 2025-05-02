import React from 'react';
import { ListGroupItem, Row, Col, Image, Button } from 'react-bootstrap';
import { useCart } from '../context/CartContext';

const CartItem = ({ item, isMini }) => {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <ListGroupItem>
      <Row className="align-items-center">
        <Col xs={4} md={3}>
          <Image src={item.image} alt={item.title} thumbnail />
        </Col>
        <Col xs={8} md={9}>
          <div className="d-flex justify-content-between">
            <h6 className="mb-1">{item.title}</h6>
            <Button 
              variant="link" 
              size="sm" 
              className="text-danger p-0"
              onClick={() => removeFromCart(item.id)}
            >
              <i className="bi bi-x-lg"></i>
            </Button>
          </div>
          <div className="d-flex justify-content-between align-items-center">
            <div>
              ${item.price.toFixed(2)} × {item.quantity}
            </div>
            {!isMini && (
              <div className="d-flex align-items-center">
                <Button 
                  variant="outline-secondary" 
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </Button>
                <span className="mx-2">{item.quantity}</span>
                <Button 
                  variant="outline-secondary" 
                  size="sm"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </Button>
              </div>
            )}
          </div>
        </Col>
      </Row>
    </ListGroupItem>
  );
};

export default CartItem;
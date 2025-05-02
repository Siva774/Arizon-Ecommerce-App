import React from 'react';
import { Container, Card, ListGroup, Button, Alert, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import CartItem from '../components/CartItem';
import { useCart } from '../context/CartContext';

const CartPage = () => {
  const { cartItems, cartTotal } = useCart();

  const shippingCost = cartItems.length > 0 ? 5.99 : 0;
  const total = cartTotal + shippingCost;

  return (
    <>
      <Header />
      <Container className="py-5">
        <h1 className="mb-4">Your Shopping Cart</h1>
        {cartItems.length === 0 ? (
          <Alert variant="info">
            Your cart is empty. <Link to="/products">Continue shopping</Link>
          </Alert>
        ) : (
          <Row>
            <Col lg={8}>
              <ListGroup>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} isMini={false} />
                ))}
              </ListGroup>
            </Col>
            <Col lg={4}>
              <Card>
                <Card.Header>Order Summary</Card.Header>
                <ListGroup variant="flush">
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Subtotal</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between">
                    <span>Shipping</span>
                    <span>${shippingCost.toFixed(2)}</span>
                  </ListGroup.Item>
                  <ListGroup.Item className="d-flex justify-content-between fw-bold">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </ListGroup.Item>
                  <ListGroup.Item>
                    <Button 
                      as={Link} 
                      to="/checkout" 
                      variant="primary" 
                      className="w-100"
                      disabled={cartItems.length === 0}
                    >
                      Proceed to Checkout
                    </Button>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )}
      </Container>
      <Footer />
    </>
  );
};

export default CartPage;
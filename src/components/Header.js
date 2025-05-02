import React from 'react';
import { Container, Navbar, Nav, Badge } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import MiniCart from './MiniCart';

const Header = () => {
  const { cartCount, setShowMiniCart, showMiniCart } = useCart();

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand as={Link} to="/">Arizon</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link as={Link} to="/products">Products</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link 
              onClick={() => setShowMiniCart(!showMiniCart)}
              className="position-relative"
            >
              <i className="bi bi-cart-fill"></i>
              {cartCount > 0 && (
                <Badge pill bg="danger" className="position-absolute top-0 start-100 translate-middle">
                  {cartCount}
                </Badge>
              )}
            </Nav.Link>
          </Nav>
          {showMiniCart && <MiniCart />}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
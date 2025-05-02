import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const Footer = () => {
  return (
    <footer className="bg-light py-4 mt-5">
      <Container>
        <Row>
          <Col md={4}>
            <h5>About Us</h5>
            <p>Arizon is your one-stop shop for all your needs.</p>
          </Col>
          <Col md={4}>
            <h5>Quick Links</h5>
            <ul className="list-unstyled">
              <li><a href="/">Home</a></li>
              <li><a href="/products">Products</a></li>
              <li><a href="/cart">Cart</a></li>
            </ul>
          </Col>
          <Col md={4}>
            <h5>Contact</h5>
            <address>
              <strong>Arizon Inc.</strong><br />
              123 Main Street<br />
              Phoenix, AZ 85001<br />
              <abbr title="Phone">P:</abbr> (123) 456-7890
            </address>
          </Col>
        </Row>
        <Row>
          <Col className="text-center mt-3">
            <p className="mb-0">&copy; {new Date().getFullYear()} Arizon. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
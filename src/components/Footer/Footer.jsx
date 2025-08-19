import React from 'react';
import { Container } from 'react-bootstrap';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer text-dark text-center py-3">
      <Container>
        <small>&copy; {new Date().getFullYear()} Mya Htut Khaung. All rights reserved.</small>
      </Container>
    </footer>
  );
}

export default Footer;

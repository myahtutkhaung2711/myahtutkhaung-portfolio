import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import './Contact.css';

function Contact() {
  return (
    <Container className="py-5" id="contact">
      <h2 className="text-center mb-4">Contact Me</h2>
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter your name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter your email" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={4} placeholder="Your message" />
        </Form.Group>
        <Button variant="info" type="submit">Send</Button>
      </Form>
    </Container>
  );
}

export default Contact;

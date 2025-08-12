import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './About.css';

function About() {
  return (
    <Container className="py-5" id="about">
      <h2 className="text-center mb-4">About Me</h2>
      <Row>
        <Col md={4} className="text-center">
          <Image src="https://via.placeholder.com/200" roundedCircle />
        </Col>
        <Col md={8}>
          <p>
            I am a Junior Web Developer passionate about creating responsive,
            dynamic, and user-friendly websites using React, Laravel, and MySQL.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

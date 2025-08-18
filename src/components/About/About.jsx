import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './About.css';

function About() {
  return (
    <Container className="py-5" id="about">
      <h1 className="text-center mb-4 header"> About Me</h1>
      <Row>
        <Col md={4} className="text-center">
          <Image src="" roundedCircle />
        </Col>
        <Col md={8}>
          <h3 className='title'>I'm Mya Htut Khaung</h3>
          <span className='content'>Full Stack Developer</span>

          <p className='content-2 py-2'>
            I am a Full-Stack Developer based in Yangon, Myanmar. I hold a Professional Web Development certification from Fairyway Technology. I’m passionate about improving my coding skills and creating modern, user-friendly websites and web applications. I specialize in building WebApps and Websites using PHP/Laravel and React/Node.js. Currently, I am pursuing a BSc (Hons) in Computing at KMD College, Myanmar.
          </p>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

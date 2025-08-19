import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";
import aboutImg from "../../assets/AboutImg.jpg"; 
import './About.css';

function About() {
  return (
    <Container className="py-5" id="about">
      <h1 className="text-center mb-4 header"> <FontAwesomeIcon icon={faUser} style={{ fontSize: "35px" }}/> About Me</h1>
      <Row>
        <Col md={6} className="text-center">
          <img 
            src={aboutImg} 
            className="img-fluid rounded-2 hover-shadow"
            alt="About Me" 
            style={{ width: "250px", height: "300px", objectFit: "cover", borderRadius: "50%"}}
          />
        </Col>
        <Col md={6}>
          <h4 className='title'>I'm Mya Htut Khaung</h4>
          <span className='content' style={{ fontSize: "15px",}}>Full Stack Developer</span>

          <p className='content-2 py-2'>
            I am a Full-Stack Developer based in Yangon, Myanmar. 
            I hold a Professional Web Development certification from Fairyway Technology.
            I’m passionate about improving my coding skills and creating modern, user-friendly websites and web applications. 
            I specialize in building WebApps and Websites using PHP/Laravel and React/Node.js. 
            Currently, I am pursuing a BSc (Hons) in Computing at KMD College, Myanmar.
          </p>

          <p className='content-2 py-2'>
            <span style={{ fontSize: "13px",}}>Mail: </span> myahtutkhaung2002@gmail.com
          </p>
          <p className='content-2'>
            <span style={{ fontSize: "13px",}}>Place: </span> North Okkalapa Township, Yangon, Myanmar.
          </p>

          <Button href="#about" className="btn mt-4 text-light">Resume !</Button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { ReactTyped } from "react-typed";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub, faTelegram, faFacebook } from "@fortawesome/free-brands-svg-icons";
import profileImg from "../../assets/profile.png";
import './Header.css';

function Header() {
    return (
        <div className="header-section text-white" id="home">
            <Container>
                <Row className="align-items-center">
                    {/* Left Side - Text */}
                    <Col md={5} className="header-text text-start">
                        <h2 className='subtitle-title text-dark'>Hi There, </h2>
                        <h3 className='subtitle-title text-dark'>
                            I'm <span className='highlight'>Mya Htut Khaung.</span>
                        </h3>
                        <p className='text-dark' style={{ fontWeight: 'bold',}}>
                            I Am Into
                            <span className='text'>
                                {"  "}
                                <ReactTyped
                                    strings={[
                                        "Web Development",
                                        "Frontend Development",
                                        "Backend Development",
                                        "Web Designing",
                                        "A Freelancer"
                                    ]}
                                    typeSpeed={80}
                                    backSpeed={40}
                                    loop={true} 
                                    cursorChar="|"
                                    showCursor={true}
                                />
                            </span>
                        </p>

                        {/* Social Links */}
                        <div className="social-link mt-4 d-flex gap-3">
                            <a href="https://www.linkedin.com/in/mya-htut-khaung" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faLinkedin} />
                            </a>
                            <a href="https://github.com/myahtutkhaung2711" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faGithub} />
                            </a>
                            <a href="https://t.me/myagyi2711" target="_blank" rel="noopener noreferrer" className="social-icon">
                                <FontAwesomeIcon icon={faTelegram} />
                            </a>
                            <a href="https://facebook.com/mya.h.khaung" target="_blank" rel="noopener noreferrer" className='social-icon'>
                                <FontAwesomeIcon icon={faFacebook} />                   
                            </a>
                        </div>

                        <Button variant='dark' href="#about" className="btn mt-4 text-light">About Me !</Button>
                    </Col>

                    {/* Right Side - Image */}
                    <Col md={7} className="text-center text-md-center">
                        <img 
                            src={profileImg} 
                            className="rounded-circle img-fluid shadow-lg hover-shadow" 
                            alt="Profile" 
                            style={{ width: "400px", height: "400px", objectFit: "cover", borderRadius: "50%"}}  
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Header;

import React from 'react';
import { Container, Button } from 'react-bootstrap';
import './Header.css';

function Header() {

    return (
        <div className="header-section text-white text-center" id="home">
            <Container>
                <h1>Hello, I'm <span className="text-info">Mya Htut Khaung</span></h1>
                <p>Junior Web Developer | React | Laravel | MySQL</p>
                
                <Button variant="info" href="#about">Know More</Button>
            </Container>
        </div>
    );
}

export default Header;

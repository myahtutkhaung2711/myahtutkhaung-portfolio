import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './Navbar.css';

function MyNavbar() {
    const [activeSection, setActiveSection] = useState("home");

    useEffect(() => {
        const sections = document.querySelectorAll("section");

        const options = {
            threshold: 0.4, 
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id);
                }
            });
        }, options);

        sections.forEach(section => observer.observe(section));

        return () => observer.disconnect();
    }, []);

    return (
        <Navbar bg="light" variant="dark" expand="lg" sticky="top" className="my-navbar">
            <Container>
                <Navbar.Brand href="#home" className="brand">
                    <img
                        src="/src/assets/MyaHtutKhaung_logo.png"
                        alt="MyaHtutKhaung Logo"
                        width="200"
                        height="auto"
                        className="d-inline-block align-top"
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ms-auto">
                        <Nav.Link href="#home" className={activeSection === "home" ? "active-link" : ""}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeSection === "about" ? "active-link" : ""}>About</Nav.Link>
                        <Nav.Link href="#qualification" className={activeSection === "qualification" ? "active-link" : ""}>Qualification</Nav.Link>
                        <Nav.Link href="#skills" className={activeSection === "skills" ? "active-link" : ""}>Skills</Nav.Link>
                        <Nav.Link href="#work" className={activeSection === "work" ? "active-link" : ""}>Work</Nav.Link>
                        <Nav.Link href="#services" className={activeSection === "services" ? "active-link" : ""}>Services</Nav.Link>
                        <Nav.Link href="#contact" className={activeSection === "contact" ? "active-link" : ""}>Contact</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default MyNavbar;

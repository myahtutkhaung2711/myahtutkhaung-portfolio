import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Services.css';

function Services() {
    const services = [
        { title: 'Web Development', desc: 'Building responsive and modern websites.' },
        { title: 'Backend Development', desc: 'Laravel & MySQL based API and logic.' },
        { title: 'UI/UX Design', desc: 'Clean and user-friendly interfaces.' },
    ];

    return (
        <Container className="py-5" id="services">
            <h2 className="text-center mb-4">Services</h2>
            <Row>
                {services.map((service, index) => (
                    <Col md={4} key={index} className="mb-3">
                        <Card className="service-card h-100">
                            <Card.Body>
                                <Card.Title>{service.title}</Card.Title>
                                <Card.Text>{service.desc}</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </Container>
    );
}

export default Services;

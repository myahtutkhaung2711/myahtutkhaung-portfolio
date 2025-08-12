import React from 'react';
import { Container, Card } from 'react-bootstrap';
import './Education.css';

function Education() {
  const education = [
    { title: 'B.C.Sc', school: 'University of Computer Studies', year: '2020 - 2024' },
    { title: 'Web Development Bootcamp', school: 'Online Course', year: '2023' },
  ];

  return (
    <Container className="py-5" id="education">
      <h2 className="text-center mb-4">Education</h2>
      {education.map((edu, index) => (
        <Card key={index} className="mb-3">
          <Card.Body>
            <Card.Title>{edu.title}</Card.Title>
            <Card.Subtitle>{edu.school}</Card.Subtitle>
            <Card.Text>{edu.year}</Card.Text>
          </Card.Body>
        </Card>
      ))}
    </Container>
  );
}

export default Education;

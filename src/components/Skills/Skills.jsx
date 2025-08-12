import React from 'react';
import { Container, ProgressBar } from 'react-bootstrap';
import './Skills.css';

function Skills() {
    const skills = [
        { name: 'React', value: 80 },
        { name: 'Laravel', value: 75 },
        { name: 'MySQL', value: 70 },
        { name: 'Bootstrap', value: 85 },
    ];

    return (
        <Container className="py-5" id="skills">
            <h2 className="text-center mb-4">Skills</h2>
                {skills.map((skill, index) => (
                    <div key={index} className="mb-3">
                    <h6>{skill.name}</h6>
                    <ProgressBar now={skill.value} label={`${skill.value}%`} />
                    </div>
                ))}
        </Container>
    );
}

export default Skills;

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode } from "@fortawesome/free-solid-svg-icons";
import {
    faPhp,
    faLaravel,
    faReact,
    faHtml5,
    faCss3Alt,
    faJs,
    faBootstrap,
    faGitAlt,
    faGithub,
    faDocker,
    faLinux,
    faNodeJs,
    faFigma
} from "@fortawesome/free-brands-svg-icons";
import { faDatabase, faCoffee } from "@fortawesome/free-solid-svg-icons";
import './Skills.css';

function Skills() {
    const skills = [
        { name: "PHP", icon: faPhp, color: "#8993be" },
        { name: "Laravel", icon: faLaravel, color: "#ff2d20" },
        { name: "MySQL", icon: faDatabase, color: "#00758f" },
        { name: "MongoDB", icon: faDatabase, color: "#4DB33D" },
        { name: "React", icon: faReact, color: "#61DBFB" },
        { name: "NodeJS", icon: faNodeJs, color: "#3c873a" },
        { name: "HTML5", icon: faHtml5, color: "#E34F26" },
        { name: "CSS3", icon: faCss3Alt, color: "#264de4" },
        { name: "JavaScript", icon: faJs, color: "#F7DF1E" },
        { name: "Bootstrap", icon: faBootstrap, color: "#563d7c" },
        { name: "Git", icon: faGitAlt, color: "#F1502F" },
        { name: "GitHub", icon: faGithub, color: "#333" },
        { name: "Docker", icon: faDocker, color: "#0db7ed" },
        { name: "Java", icon: faCoffee, color: "#f89820" },
        { name: "Linux", icon: faLinux, color: "black"},
        { name: "Figma", icon: faFigma, color: "#F24E1E" }

    ];

    return (
        <div className="skills-section py-5 text-white" id="skills">
            <Container>
                <h1 className="text-center mb-5 header"> <FontAwesomeIcon icon={faCode} className="text-dark" style={{ fontSize: "35px", fontWeight: "bold" }} /> Skills & Abilities</h1>
                <Row className="g-4">
                    {skills.map((skill, index) => (
                    <Col key={index} xs={6} md={4} lg={3}>
                        <Card className="skill-card text-center p-3 shadow-sm">
                            <Card.Body>
                                <FontAwesomeIcon
                                    icon={skill.icon}
                                    size="4x"
                                    style={{ color: skill.color }}
                                    className='mb-3'
                                />
                                <Card.Title className="mt-2" style={{ fontWeight: "bold" }}>{skill.name}</Card.Title> 
                            </Card.Body>
                        </Card> 
                    </Col>
                    ))}
                </Row>
            </Container>
        </div>
    );
}

export default Skills;

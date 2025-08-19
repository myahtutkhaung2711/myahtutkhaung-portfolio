import React from 'react';
import { Container} from 'react-bootstrap';
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import './Education.css';

function Education() {
  const education = [
    { 
      title: 'B.E.H.S (2), Mingalardon ', 
      school: 'High School', 
      year: '2019 Academic Year',
    },
    { 
      title: 'Fairyway Technology', 
      school: 'Professional Web Development, UI/UX Design Course & RockStar Course', 
      year: '2023 | Completed',
    },
    { 
      title: 'KMD Collage, Myanmar', 
      school: 'BSc (Hons) in Computing', 
      year: '2025 - pending',
    },
  ];

  return (
      <div className="education-section py-5 text-dark" id="education">
        <Container>
          <h1 className="text-center mb-5 header"><FontAwesomeIcon icon={faGraduationCap} className="text-dark" style={{ fontSize: "35px", fontWeight: "bold" }} /> My Education</h1>
          {education.map((edu, index) => (
            <div className="education-card shado-sm mb-4 p-3" key={index}>
              <h5 className="mb-1 header">{edu.title}</h5>
              <h6 className="education-text mb-1">{edu.school}</h6>
              <small className="education-small">{edu.year}</small>
            </div>
          ))}
        </Container>
      </div>
  );
}

export default Education;

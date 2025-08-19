import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCalendar } from '@fortawesome/free-solid-svg-icons';
import './Qualification.css';

function Qualification() {
  const timeline = [
    {
      type: 'education',
      title: 'Fairyway Technology',
      subtitle: 'Web Development & UI/UX Course',
      year: '2023 - 2024',
    },
    {
      type: 'experience',
      title: 'Web Developer (Intern)',
      subtitle: 'Willtec Myanmar Co., Ltd',
      year: '2024 April - 2024 October',
    },
    {
      type: 'education',
      title: 'KMD College , Myanmar',
      subtitle: 'BSc (Hons) in Computing',
      year: '2025 - pending',
    },
    {
      type: 'experience',
      title: 'Junior Web Developer',
      subtitle: 'Willtec Myanmar Co., Ltd',
      year: '2024 October - Present',
    },
  ];

  return (
    <div className="qualification container py-5" id="qualification">
      <h2 className="text-center mb-1">Qualification</h2>
      <p className="text-center text-muted mb-5">My personal journey</p>
      
      <div className="timeline">
        {timeline.map((item, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-icon">
              <FontAwesomeIcon icon={item.type === 'education' ? faGraduationCap : faBriefcase} />
            </div>
            <div className="timeline-content">
              <h5>{item.title}</h5>
              <p className="subtitle">{item.subtitle}</p>
              <p className="year"><FontAwesomeIcon icon={faCalendar} className="me-2" />{item.year}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualification;

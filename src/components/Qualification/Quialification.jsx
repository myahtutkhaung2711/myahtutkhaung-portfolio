import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faCalendar, faCircleNodes } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Qualification.css';

function Qualification() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  const timeline = [
    {
      type: 'education',
      title: 'Fairyway Technology',
      subtitle: 'Professional Web Development & UI/UX Course',
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
      title: 'Twinkle Collage , Myanmar',
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
      <h2 className="text-center mb-1 header"> <FontAwesomeIcon icon={faCircleNodes} className="me-2" /> Qualification</h2>
      <p className="text-center text-muted mb-5">My personal journey</p>

      <div className="timeline">
        {timeline.map((item, index) => (
          <div
            key={index}
            className={`timeline-item ${item.type}`}
            data-aos={item.type === 'education' ? 'fade-left' : 'fade-right'}
          >
            <div className="timeline-content">
              <h5>{item.title}</h5>
              <p className="subtitle">{item.subtitle}</p>
              <p className="year">
                <FontAwesomeIcon icon={faCalendar} className="me-2" />
                {item.year}
              </p>
            </div>
            <div className="timeline-icon">
              <FontAwesomeIcon icon={item.type === 'education' ? faGraduationCap : faBriefcase} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Qualification;

import React from 'react';
import './Experiences.css';

const experiences = [
    {
        role: 'Junior Web Developer',
        company: 'Willtec Myanmar',
        period: '2024 - Present',
        description: 'Working on web applications using Laravel, Bootstrap, and React. Maintaining and improving client websites.'
    },
    {
        role: 'Freelance Developer',
        company: 'Self-employed',
        period: '2023 - 2024',
        description: 'Developed portfolio websites, small business sites, and simple online shops for various clients.'
    },
    {
        role: 'Intern Web Developer',
        company: 'ABC Tech',
        period: '2022',
        description: 'Learned basic web development skills, assisted in front-end tasks, and created small modules in Laravel.'
    }
];

const Experiences = () => {
    return (
        <section id="experience" className="container">
            <h2 className="mb-4 text-center">Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                <div className="experience-card shadow-sm" key={index}>
                    <h5>{exp.role}</h5>
                    <h6 className="text-primary">{exp.company}</h6>
                    <small className="text-muted">{exp.period}</small>
                    <p>{exp.description}</p>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Experiences;

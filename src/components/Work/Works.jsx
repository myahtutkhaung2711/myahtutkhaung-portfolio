import React from 'react';
import './Works.css';

const projects = [
  {
    title: 'Todo App',
    type: 'React / Node.JS',
    image: './src/assets/default_project.jpg',
    description: 'A personal portfolio built with React and Bootstrap.',
    demo: 'https://github.com/yourusername/portfolio',
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'E-commerce Shop',
    type: 'PHP / Laravel',
    image: '/src/assets/default_project.jpg',
    description: 'A Laravel & MySQL online shop with authentication and cart.',
    demo: 'https://github.com/myahtutkhaung2711/E-Commerce',
    link: 'https://github.com/myahtutkhaung2711/E-Commerce'
  },
  {
    title: 'Blog System',
    type: 'PHP',
    image: './src/assets/default_project.jpg',
    description: 'A simple React Todo app with local storage.',
    demo: 'https://github.com/myahtutkhaung2711/PHP-Blog-System',
    link: 'https://github.com/myahtutkhaung2711/PHP-Blog-System'
  }
];

const Works = () => {
    return (
        <section id="work" className="container">
            <h2 className="mb-4 text-center">My Work</h2>
            <div className="row">
                {projects.map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                    <div className="card project-card h-100 shadow-sm">
                    <img src={project.image} className="card-img-top" alt={project.title} />
                    <div className="card-body d-flex flex-column">
                        <h5 className="card-title">{project.title}</h5>
                        <p className="card-text flex-grow-1">{project.description}</p>
                        <div className="d-flex align-item-center justify-content-center gap-3">
                          <a href={project.demo} target='_blank' rel='noreferre' className='btn btn-outline-info mt-auto'>Demo</a>
                          <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-outline-primary mt-auto">Website</a>
                        </div>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Works;

import React from 'react';
import './Works.css';

const projects = [
  {
    title: 'Portfolio Website',
    image: 'https://via.placeholder.com/400x200',
    description: 'A personal portfolio built with React and Bootstrap.',
    link: 'https://github.com/yourusername/portfolio'
  },
  {
    title: 'E-commerce Shop',
    image: 'https://via.placeholder.com/400x200',
    description: 'A Laravel & MySQL online shop with authentication and cart.',
    link: 'https://github.com/yourusername/shop'
  },
  {
    title: 'Todo App',
    image: 'https://via.placeholder.com/400x200',
    description: 'A simple React Todo app with local storage.',
    link: 'https://github.com/yourusername/todo-app'
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
                        <a href={project.link} target="_blank" rel="noreferrer" className="btn btn-primary mt-auto">
                        View Project
                        </a>
                    </div>
                    </div>
                </div>
                ))}
            </div>
        </section>
    );
};

export default Works;

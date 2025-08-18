import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Education from './components/Education/Education.jsx';
import Services from './components/Services/Services.jsx';
import Works from './components/Work/Works.jsx';
import Experiences from './components/Experiences/Experiences.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';

function App() {
    return (
      <>
        <MyNavbar />
        <Header />
        <About />
        <Skills />
        <Education />
        <Services />
        <Works />
        <Experiences />
        <Contact />
        <Footer />
      </>
    );
}

export default App;

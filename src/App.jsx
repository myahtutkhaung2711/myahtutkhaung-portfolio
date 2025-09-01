import React from 'react';
import './App.css';
import MyNavbar from './components/Navbar/Navbar.jsx';
import Header from './components/Header/Header.jsx';
import About from './components/About/About.jsx';
import Skills from './components/Skills/Skills.jsx';
import Services from './components/Services/Services.jsx';
import Works from './components/Work/Works.jsx';
import Contact from './components/Contact/Contact.jsx';
import Footer from './components/Footer/Footer.jsx';
import Qualification from './components/Qualification/Quialification.jsx';

function App() {
    return (
      <>
        <MyNavbar />
        <Header />
        <About />
        <Qualification />
        <Skills />
        <Works />
        <Services />
        <Contact />
        <Footer />
      </>
    );
}

export default App;

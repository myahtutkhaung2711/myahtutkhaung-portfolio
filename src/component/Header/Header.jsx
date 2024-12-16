import React from 'react';
import '@fontsource/kavoon';
import "./header.css"
function Header() {

    return(
        <>
           <header className='header'>
                <nav className='navbar'>
                    <div className='nav-container'>
                        <a href="#home" className='portfolio_name'>Mya Htut Khaung</a>
                        <button class="menu-toggle" aria-label="Toggle Menu">&#9776;</button>
                        <ul className='nav-list grid row'>
                            <li className='nav-item'> <a href='#home'>Home</a> </li>
                            <li className='nav-item'><a href='#about'>About</a></li>
                            <li className='nav-item'><a href='#skills'>Skills</a></li>
                            <li className='nav-item'><a href='#projects'>Projects</a></li>
                            <li className='nav-item'><a href='#Contact'>Contact</a></li>
                        </ul>
                    </div>
                </nav>
           </header> 
        </>
    );
}

export default Header;
import React from 'react';
import '@fontsource/kavoon';
import "./header.css"
function Header() {

    return(
        <>
           <header className='header'>
                <div className="header container">
                    <a href="#"> Mya Htut Khaung </a>
                </div>

                {/* Nav Section  */}
                <div className="nav">
                    <ul className='nav container'>
                        <li></li>
                    </ul>
                </div>
           </header> 
        </>
    );
}

export default Header;
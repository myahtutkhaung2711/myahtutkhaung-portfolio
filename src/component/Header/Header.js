import React from 'react';
import '@fontsource/kavoon'
function Header() {
    const styles = {
        fontFamily: "'Kavoon', cursive",
    };
    return(
        <>
           <div className='container'>
            <nav>
                <p className='text-center' style={styles}><a>Mya Htut Khuang</a></p>
            </nav>
           </div>
        </>
    );
}

export default Header;
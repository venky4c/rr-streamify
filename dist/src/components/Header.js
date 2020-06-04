import React from 'react'
import '../assets/Header.css';

const Header = () => {
    const link = 'Series'
    return (
        
        <div className='header'>
            
            <div className='static'>
                <h1 id='title'>
                    DEMO Streaming
                </h1>
                <div id='right-menu'>
                    <button id='button1'>Log in</button>
                    <button id='button2'>Start your free trial</button>
                </div>                
            </div>
            <div className='dynamic'>
            <h3>Popular {link==='Series' ? 'Series' : 'Movies'}</h3>
            </div>
        </div>
    )
}

export default Header
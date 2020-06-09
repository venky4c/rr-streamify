import React from 'react'

const Header = () => {
    return (
        <div className='header__wrapper'> 
            <div className='static'>
                <h1 className='title'>
                    DEMO Streaming
                </h1>
            <div className='right-menu'>
                <button className='login-button'>Log in</button>
                <button className='trial-button'>Start your free trial</button>
            </div>                
            </div>
        </div>
    )
}

export default Header

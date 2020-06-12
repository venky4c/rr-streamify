import React from 'react'

const Header = () => {
    return (
        <div className='header__wrapper'> 
            <div className='title'>
                <h1>
                    DEMO Streaming
                </h1>
            </div>
            <div className='login'>
                <button className='login-button'>Log in</button>
                <button className='trial-button'>Start your free trial</button>
            </div>
        </div>
    )
}

export default Header

import React from 'react'
import { Link } from 'react-router-dom'
import Home from '../pages/Home'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='links'>
                <nav>
                    <Link className='a' to='./home'>Home
                    </Link> | Terms & Conditions | Privacy Policy | Collection Statement | Help | Manage Account
                </nav>
            </div>
            <div className='copyright'>
                <p>Copyright © 2016 DEMO Streaming. All Rights Reserved. </p>
            </div>
            <div id='social'>
             <span className='icons'><i class="fa fa-facebook-square"></i>
                <i class="fa fa-twitter-square"></i>
            
               
               <i class="fa fa-instagram"></i></span> 
            </div>

            <div id='stores'>
                <div className='apple'>Apple</div>
                <div className='google'>Google</div>
                <div className='ms'>Microsoft</div>
            </div>

        </div>
    )
}

export default Footer
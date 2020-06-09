import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='footer__links'>                
                <nav>
                    <Link className='footer__wrapper__a' to='./home'>Home
                    </Link> | Terms & Conditions | Privacy Policy | Collection Statement | Help | Manage Account
                </nav>
                <div className='copyright'>
                    <p>Copyright © 2016 DEMO Streaming. All Rights Reserved. </p>
                </div> 
            </div>            
            <div className='footer__social'>
                <span className='footer__icons'>
                    <i class="fa fa-facebook-square"></i>
                    <i class="fa fa-twitter-square"></i>                           
                    <i class="fa fa-instagram"></i>
                </span>  
            </div>
            <div className='footer__stores'>
                {/* <div className='apple'> */}
                <i class="fa fa-apple-alt">App Store</i>{/* </div> */}                
               {/*  <div className='google'> */}
               <span class="iconify" data-icon="fa-brands:google-play" data-inline="false"></span>
               {/* <span class="iconify" data-icon="fa-google-play">Google Play</span> */}
               {/*      <i id="fa fa-google-play">Google Play</i> */}
                {/* </div> */}
                {/* <div className='ms'> */}
                <i class="fa fa-microsoft">Microsoft</i>{/* </div>  */}
            </div>
        </div>
    )
}

export default Footer
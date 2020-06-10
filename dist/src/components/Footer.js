import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
    return (
        <div className='footer__wrapper'>
            <div className='footer__links'>                
                <nav>
                    <Link className='footer__links__a' to='./home' style={{ textDecoration: 'none', color: 'inherit'}}>Home</Link> | Terms & Conditions | Privacy Policy | Collection Statement | Help | Manage Account
                </nav>
            </div>
            <div className='footer__copyright'>
                    <p>Copyright © 2016 DEMO Streaming. All Rights Reserved. </p>
            </div> 
                        
            <div className='footer__social'>
                <div className='footer__icons'>
                    <i class="fa fa-facebook-square" style={{textAlign: 'right'}}></i>
                    <i class="fa fa-twitter-square" style={{textAlign: 'center'}}></i>                           
                    <i class="fa fa-instagram"></i>
                </div>
                 
                <div className='footer__stores'>
                    <div className='apple'>
                        <i class="fa fa-apple-alt">App Store</i></div>                
                    <div className='google'>
                        <span class="iconify" data-icon="fa-brands:google-play" data-inline="false"></span>               
                    </div>
                    <div className='ms'>
                        <i class="fa fa-microsoft">Microsoft</i>
                    </div> 
                </div>                      
            </div>
        </div>
    )
}

export default Footer

{/* <span class="iconify" data-icon="fa-google-play">Google Play</span> */}
                {/*      <i id="fa fa-google-play">Google Play</i> */}
/*
<div class="grid-container">
  <div class="footer__copyright"></div>
  <div class="footer__links"></div>
  <div class="footer__social">
    <div class="footer__icons"></div>
    <div class="footer__stores"></div>
  </div>
</div> */
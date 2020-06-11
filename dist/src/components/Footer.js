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
                    <div className='apple'
                            style={{marginBottom:'6.25rem'}}>
                        <img src={require('../assets/images/app.png')} alt=''/>
                    </div>                
                    <div className='google' 
                            style={{marginBottom:'6.25rem'}}>
                        <img src={require('../assets/images/google.png')} alt=''/>                        
                    </div>
                    <div className='ms'
                            style={{marginBottom:'6.25rem'}}>
                        <img src={require('../assets/images/ms.png')} alt=''/>
                    </div> 
                </div>                      
            </div>
        </div>
    )
}

export default Footer
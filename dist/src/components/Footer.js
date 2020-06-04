import React from 'react'
import '../assets/Footer.css'

const Footer = () => {
    return (
        <div className='footer'>
            <div className='links'>
                <nav>
                    Link1 | Link2 | Link3 | Link4 | Link5 | Link6
                </nav>
            </div>
            <div className='copyright'>
                <p>Copyright © 2020 DEMO Streaming. All rights reserved. </p>
            </div>
            <div className='social'>
            {/* <span className='icons'><i class="fa fa-facebook-square"></i>
                <i class="fa fa-twitter-square"></i>
            
               
               <i class="fa fa-instagram"></i></span> */}
            </div>

            <div className='stores'>
                <div className='apple'>Apple</div>
                <div className='google'>Google</div>
                <div className='ms'>Microsoft</div>
            </div>

        </div>
    )
}

export default Footer
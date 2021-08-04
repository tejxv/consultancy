import React from 'react';
import './Styles/Header.css'
const Header=()=> {
    
    return(
        <div className='Header'>
            <div className='section1'>
                <img 
                className='immiglobal-logo' 
                alt='' 
                src='https://immiglobalservices.com/wp-content/uploads/2017/05/cropped-cropped-Immiglobal.jpg'
                height='100px'
                />
                <h2 className='immiglobal-text'>
                    Immiglobal <br /><span>Services</span>
                </h2>
                <div className='contacting'>
                    <ul className='media-link'>
                        <li><i class="fab fa-instagram"></i></li>
                        <li><i class="fab fa-facebook-f"></i></li>
                        <li><i class="fab fa-linkedin-in"></i></li>
                        <li><i class="fab fa-twitter"></i></li>
                    </ul>
                    <ul className='contact-link'>
                        <li id='check'><i class="fas fa-phone"></i>+91-7042627808</li>
                        <li><i class="far fa-envelope"></i>immiglobal@gmail.com</li>
                    </ul>
                </div>
            </div>
            <div className='section2'>
                ------Navbar------
            </div>
        </div>
    )
    
}
export default Header;
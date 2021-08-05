import React from 'react';
import './Styles/Footer.css';

const Footer =() =>{
    return(
        <div className='Footer'>
            <div className='Footer1'>
                <h2>OUR OFFICES</h2>
                <img alt='' src='https://immiglobalservices.com/wp-content/uploads/2017/05/cropped-cropped-Immiglobal.jpg'
                height='140px'
                />
                <div className='Footer1-text'>
                <i className="fas fa-home"></i>
                    Unit No. A302, 3rd Floor <br />
                    Rajhans Plaza, Indrapuram,<br />
                    Ghaziabad
                </div>
                <div className='Footer1-text'>
                <i className="fas fa-building"></i>
                    xyz place, xyz office, Ontario<br/>
                    Canada
                </div>
                <div className='Footer1-text'>
                <i className="fas fa-phone"></i> 
                +91-7042627808 <br/>
                +91-7042567898
                </div>
            </div>
            <div className='Footer2'>
                <h2>QUICK LINKS</h2>
                <div className='Footer2-ul'>
                <ul> <p>CANADA</p>
                    <li>Canada Immigration</li>
                    <li>IELTS Bands Required</li>
                    <li>Find Job in Canada</li>
                    <li>Canada Express Entry</li>
                    <li>Canada Business Immigration</li>
                </ul>
                <ul> <p>AUSTRALIA</p>
                    <li>Australia Immigration</li>
                    <li>IELTS Bands Required</li>
                    <li>Find Job in Australia</li>
                    <li>Australia Express Entry</li>
                    <li>Australia Business Immigration</li>
                </ul>
                </div>
            
            </div>
            <div className='Footer3'>
                <div className='important-dates'>
                    <h2>Important Dates</h2>
                    <ul>
                        <li>26 Aug 2021</li>
                        <li>12 Sept 2021</li>
                        <li>06 Oct 2021</li>
                        <li>25 Jan 2022</li>
                    </ul>
                </div>
                <div className='calendar'>
                    Dynamic Calendar
                    <i className="fas fa-calendar-alt"></i>
                </div>

            </div>
        </div>
    )
}
export default Footer;
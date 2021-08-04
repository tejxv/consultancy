import React from 'react';
import './Styles/MidSection.css';

const MidSection = () =>{
    return(
        <div className='MidSection'>
            <div className='display'>
                <h2>Display</h2>
                <p>Display Content</p>
            </div>
            <div className='testimonials'>
                <div className='test-card'>
                <h3>Name</h3>
                {/* <img src=''/> */}
                </div>
            </div>
        </div>
    )
}
export default MidSection;
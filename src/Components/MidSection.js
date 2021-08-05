import React from 'react';
import './Styles/MidSection.css';

const MidSection = () =>{
    return(
        <div className='MidSection'>
            <div className='display'>
                <h2>Display</h2>
                <p>Display Content</p>
            </div>
            <div className='testimonial'>
                <h2>Testimonials</h2>
                <div className='test-cards'>
                <i className="fas fa-arrow-left"></i>
                    <div className='test-card'>
                    <h3> Testimonial</h3>
                    <img alt='' src='https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1565280067000/photosp/3e6537bb-9ec4-439f-ad7d-c7f6d4f25500/stock-photo-people-smiling-smile-person-happy-3e6537bb-9ec4-439f-ad7d-c7f6d4f25500.jpg'
                    height='200px'
                    />
                    <p>
                    ~Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    </p>
                    <span>-user123 <div className='star-container'><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></div></span>
                    
                    </div>
                    <div className='test-card'>
                    <h3> Testimonial</h3>
                    <img alt='' src='https://images.theconversation.com/files/176677/original/file-20170704-13632-yt4lfx.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=926&fit=clip'
                    height='200px'
                    />
                    <p>
                    ~Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.
                    </p>
                    <span>-@vishal123 <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                    </div>
                    <div className='test-card'>

                <h3> Testimonial</h3>
                <img alt='' src='https://res.cloudinary.com/twenty20/private_images/t_watermark-criss-cross-10/v1565280067000/photosp/3e6537bb-9ec4-439f-ad7d-c7f6d4f25500/stock-photo-people-smiling-smile-person-happy-3e6537bb-9ec4-439f-ad7d-c7f6d4f25500.jpg'
                height='200px'
                />
                <p>
                ~Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
				tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
				quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
				consequat.
                </p>
                <span>-@ankitkotnala <i className="fas fa-star"></i><i className="fas fa-star"></i></span>
                
                </div>
                <i className="fas fa-arrow-right"></i>
                </div>
                
            </div>
        </div>
    )
}
export default MidSection;
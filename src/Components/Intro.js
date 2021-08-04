import React from 'react';
import './Styles/Intro.css';

const Intro = () =>{
    return(
        <div className='intro'>
            <div className='intro1'>
            <h2>Destination</h2>
            <div className='intro-cards'>
            <div className='country-card'>

            </div>
            <div className='country-card'>

            </div>
            </div>
            
            </div>
            <div className='intro2'>
                <div className='services'>
                    <h2>OUR SERVICES</h2>
                    <p>Immiglobal Services provides immigration and career enhancement services with an anrdent and devoted team.</p>
                </div>
                <div className='services-bar'>
                    <ul>
                        <li><i class="fas fa-chart-bar"></i>
IMMIGLOBAL Services guides you through the maze of questions to find solutions best suited to your profile and / or parameters ensuring you choose the best Career Path</li>
                        <li><i class="fas fa-chart-bar"></i>IMMIGLOBAL Services is an Indian firm that provides visa facilitation services for moving to any one of the countries.</li>
                        <li><i class="fas fa-chart-bar"></i>IMMIGLOBAL Services being the registered immigration consultancy company for various countries</li>
                        <li><i class="fas fa-chart-bar"></i>You should choose IMMIGLOBAL Services because we have your best interests at heart.</li>

                    </ul>
                </div>
            </div>
        </div>
    )
}
export default Intro;
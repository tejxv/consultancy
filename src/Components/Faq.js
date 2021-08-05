import React from 'react';
import './Styles/Faq.css';

const Faq = () =>{
    return(
    <div className='Faq'>
        <div className='Faq-bar'>
            <img alt='' src='https://lh3.googleusercontent.com/proxy/ma0mbvEc5fI9HQjn02q2POTFWnVEdhObxlNHkXIKZNIfUAxcJmjVxQhlPTPI2kXV7dbZIPr9Y0W3S4hbaJdjrRkmGlevwrEXQymj2H5id3uBS2Z33eY_e1UZQEEuO8m5hN57NXlG-I86sd6i8GJk92b62P9pOg'
            height='180px'
            />
            <h2>FAQ's</h2>
            <p>Welcome to Visa Experts Consultancy :) <br />
            If you have a Question about Immiglobal <br />
            you are at the right place.
            </p>
            <div>
                <ul>
                    <li>First Question</li>
                    <li>Second Question</li>
                    <li>Third Question</li>
                    <li>Fourth Question</li>
                    <li>Fifth Question</li>
                </ul>
            </div>
        </div>
        <div className="login-box">
        <h2>CONTACT US</h2>
        <form>
            <div className="user-box">
            <label>Name</label>
            <input type="text" name="" required="" />
            </div>
            <div className="user-box" >
            <label>Email</label>
            <input type="text" name="" required="" />
            </div>
            <div className="user-box" >
            <label>Phone Number</label>
            <input type="text" name="" required="" />
            </div>
            <div className='login-box-submit'>
            <a href='#'>
            Submit
            </a>
            <a >
            Know More
            </a>
            </div>
            
        </form>
        </div>
    </div>
    )
}

export default Faq;
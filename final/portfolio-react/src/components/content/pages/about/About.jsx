import React from 'react';
import './About.css'

const About = ({ darkMode }) => {
    return <div className="about">
        <div className='about-me'>
            <h3 className="card__title">About Me</h3>
            <p className="card__text">
                I'm an enthusiastic entry-level Software Engineer with a strong command of cutting-edge technologies and a dedication to ongoing skill development. Actively contributes to web application development, with a focus on
                creating user-friendly interfaces and high-quality code for effective digital solutions.<br /></p>
        </div>
        <div className='my-details'>
            <p className='detail-card'>
                <strong>Name:</strong> <span>Venkatesh Kelam</span><br /><br />
                <strong>Address:</strong> <span></span>San Jose, CA<br /><br />
                <strong>Zip Code:</strong> <span></span>95126<br /><br />
                <strong>Email:</strong> <span></span>venkyvenkatesh0101@gmail.com<br /><br />
                <strong>Phone:</strong> <span></span>+1-669-236-9712</p>
        </div>




    </div>;
}

export default About;
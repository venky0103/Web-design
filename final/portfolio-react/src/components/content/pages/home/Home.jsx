import React from 'react';
import './Home.css'

const Home = ({ darkMode }) => {
    return <div className="home-content">
        <div className='home-title'>
            <h1>Hello!</h1><br />
            <h2>I'm Venkatesh Kelam</h2>
            <h4>Front-end Developer | Software Engineer</h4>
        </div>

        <div className='home-image'>
            <img src="/assets/img/Picture.jpg" className='profile-pic' alt="My Profile" />


        </div>





    </div>;
}

export default Home;
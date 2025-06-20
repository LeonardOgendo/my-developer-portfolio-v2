import React, { useState, useEffect } from "react";
import profilePhoto from '../assets/profile.jpg';
import backgroundImage from '../assets/backgrounds/box-rule3-bg.jpg';


const AboutMe = () => {
    return (
        <div id="about" className="section-body" style={{ backgroundImage: `url(${backgroundImage})` }}>
            <div className="about-container">
                <p className="work-st">Freelancer</p>
                <div className="about-content-wrapper">
                    <div className="profile-photo">
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <div className="readme">
                        <p>Leonard Ogendo</p>
                        <p>Secure Software Engineer | Cybersecurity Specialist </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
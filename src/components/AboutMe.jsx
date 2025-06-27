import React, { useState, useEffect } from "react";
import profilePhoto from '../assets/portfolio-user.png';
import TopPerformerCard from "../shared/components/TopPerformerCard";
import SecureCodeCard from "../shared/components/SecureCodeCard";

const AboutMe = () => {
    return (
        <div id="about" className="section-body">
           
            <div className="about-container">
                 <div className="vertical-line"></div>
                <div className="about-content-wrapper">
                    <TopPerformerCard />
                    <SecureCodeCard />
                    <div className="photo-container">
                        <span className="work-st">Freelancer</span>
                        <img src={profilePhoto} alt="profile" />
                    </div>
                    <div className="readme">
                        <div id="underline"></div>
                        <p className="pro-name">Leonard Ogendo</p>
                        <p className="pro-title">Secure Software Engineer | Cybersecurity Specialist </p>

                        <p className="pro-desc">I’m a Junior Secure Software Engineer actively building deep expertise in Secure SDLC, Web & Mobile Application Security, 
                            and Cybersecurity Engineering — across Penetration Testing and Blue Team Operations (SOC).
                            With a strong command of Python and JavaScript, I build and secure modern applications — from the codebase to the cloud. 
                            My unique advantage lies in blending software engineering and security practices into one unified discipline, allowing me to design and implement 
                            systems that are resilient by design.
                            I’m currently focused on understanding how systems break, and building them so they don’t.</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default AboutMe
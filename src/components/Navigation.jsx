import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faCogs, faUser, faFileAlt, faPhone, faLaptopCode, faStar, faUserShield, faBars } from "@fortawesome/free-solid-svg-icons";
import TypewriterEffect from "./TypewriterEffect";
import backgroundVideo from "../assets/video/backgroundplay.mp4";
import backgroundImage from '../assets/backgrounds/box-rule3-bg.jpg';

function Navigation(){
    const texts = [
        "I Am Leonard Ogendo",
        'I Am a Secure Software Engineer',
        'I Am a Cybersecurity Engineer',
        'I Am a Penetration Tester'
    ]

    return(
        <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
            <nav>
                <div className="nav-bar">
                    <span id="nav-brand">Leonard Ogendo</span>
                    <ul>
                        <li>
                        <a href="#home" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                            <div className="name-box"><span>Home</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#about" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faUser} id="fa-ico-about" className="fa-ico" /></div>
                            <div className="name-box"><span>About</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#services" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faCogs} id="fa-ico-services" className="fa-ico" /></div>
                            <div className="name-box"><span>Services</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#tech-stack" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} id="fa-ico-resume" className="fa-ico" /></div>
                            <div className="name-box"><span>Skills</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#projects" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} id="fa-ico-projects" className="fa-ico" /></div>
                            <div className="name-box"><span>Projects</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#certifications" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                            <div className="name-box"><span>Certificates</span></div>
                        </a>
                        </li>
                        <li>
                        <a href="#contact" className="nav-link">
                            <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                            <div className="name-box"><span>Contact</span></div>
                        </a>
                        </li>
                        
                    </ul>
                </div>
            </nav>

            <div className="hero">
                <div className="intro">
                    <p>Software Egineer Portfolio</p>
                </div>
                <div className="typewriter-area">
                    <video autoPlay muted loop playsInline>
                        <source src={backgroundVideo} type="video/mp4" />
                    </video>
                    <div className="gradient-overlay"></div>
                </div>
            </div>
    </section>
    )
}

export default Navigation
import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faLaptopCode, faStar, faPhone, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FaCode, FaDotCircle, FaUserShield, FaTools, FaLaptopCode as FaSoftEng, FaShieldAlt, FaTerminal, FaHandshake } from 'react-icons/fa';
import { BsSend } from 'react-icons/bs';
import { MdWorkOutline } from 'react-icons/md';

import TypewriterEffect from "./TypewriterEffect";
import backgroundVideo from "../assets/video/backgroundplay.mp4";
import backgroundImage from '../assets/backgrounds/box-rule3-bg.jpg';

function Navigation(){
    const texts = [
        "I Am Leonard Ogendo",
        'I Am a Secure Software Engineer',
        'I Am a Cybersecurity Engineer',
        'I Am a Penetration Tester'
    ];

    // State to track if the user has scrolled
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
            setScrolled(true);
            } else {
            setScrolled(false);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
}, []);


    return(
        <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
            <nav>
                <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
                    <a href="#home"><span id="nav-brand">Leonard Ogendo</span></a>
                    <ul>
                        <li>
                            <a href="#home" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                                <div className="name-box"><a href="#home"><span>Home</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faUser} className="fa-ico" /></div>
                                <div className="name-box"><a href="#about"><span>About</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#tech-stack" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} className="fa-ico" /></div>
                                <div className="name-box"><a href="#skills"><span>Skills</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#tech-stack" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faProjectDiagram} className="fa-ico" /></div>
                                <div className="name-box"><a href="#experience"><span>Experience</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} className="fa-ico" /></div>
                                <div className="name-box"><a href="#projects"><span>Projects</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#certifications" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faStar} className="fa-ico" /></div>
                                <div className="name-box"><a href="#certificates"><span>Certificates</span></a></div>
                            </a>
                        </li>
                        <li>
                            <a href="#contact" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faPhone} className="fa-ico" /></div>
                                <div className="name-box"><a href="#contact"><span>Contact</span></a></div>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>

            <span className="se-tag">Software Engineer Portfolio</span>

            <div className="hero">
                <div className="intro">
                    <p className="name">Leonard Ogendo</p>

                    <p className="gen-title">Junior Secure Software & Cybersecurity Engineer</p>
                    
                    <div className="status">
                        <FaDotCircle className="status-dot" /> 
                        <p className="c-at"> Currently Freelancing</p>
                    </div>

                    <p className="zing">Helping Organizations Build Secure Systems and Protect Digital Assets.</p>

                    <div className="hero-btns">
                        <button className="view-btn"><FaCode className="btn-icon" /> View My Work</button>
                        <button className="contact-btn"><BsSend className="btn-icon" /> Get In Touch</button>
                    </div>

                    <p className="hero-tech">
                        <FaCode className="code-icon" /> Tech Stack:
                        <span id="f-span">Python</span>
                        <span>JavaScript</span>
                        <span>React</span>
                        <span>Django</span>
                        <span>Node.js</span>
                        <span>+7 more</span>
                    </p>
                </div>

                <div className="type-wrap">
                    <div className="typewriter-area">
                        <video autoPlay muted loop playsInline>
                            <source src={backgroundVideo} type="video/mp4" />
                        </video>
                        <div className="typewriter">
                            <TypewriterEffect texts={texts} />
                        </div>
                        <div className="gradient-overlay"></div>
                    </div>

                    <div className="expertise">
                        <div className="hv-block">
                            <FaSoftEng className="exp-ico" size={18} />
                            <span>Software Engineering</span>
                        </div>
                        <div className="hv-block">
                            <FaShieldAlt className="exp-ico" size={18} />
                            <span>Web & App Security</span>
                        </div>
                        <div className="hv-block">
                            <FaUserShield className="exp-ico" size={18} />
                            <span>Penetration Testing</span>
                        </div>
                        <div className="hv-block">
                            <FaTools className="exp-ico" size={18} />
                            <span>Security Operations</span>
                        </div>
                        <div className="hv-block">
                            <FaTerminal className="exp-ico" size={18} />
                            <span>Blue Teaming</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Navigation;

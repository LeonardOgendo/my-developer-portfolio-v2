import { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faLaptopCode, faStar, faPhone, faProjectDiagram } from "@fortawesome/free-solid-svg-icons";
import { FaCode, FaBars ,FaDotCircle, FaUserShield, FaTools, FaLaptopCode as FaSoftEng, FaShieldAlt, FaTerminal, FaHandshake } from 'react-icons/fa';
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
    const [isMobile, setIsMobile] = useState(() => window.matchMedia("(max-width: 768px)").matches);
    
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


    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 768px)");

        const handleMediaChange = (e) => {
            setIsMobile(e.matches);
        };

        // Set initial value
        setIsMobile(mediaQuery.matches);

        // Listen to changes
        mediaQuery.addEventListener("change", handleMediaChange);

        return () => mediaQuery.removeEventListener("change", handleMediaChange);
    }, []);


    return(
        <section className="home-section" style={{ backgroundImage: `url(${backgroundImage})` }} id="home">
            <nav>
                <div className={`nav-bar ${scrolled ? 'scrolled' : ''}`}>
                    <a href="#home"><span id="nav-brand">Leonard Ogendo</span></a>

                    <div className="menu-button"><FaBars /></div>

                    <ul>
                        <li>
                            <a href="#home" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faHome} className="fa-ico" /></div>
                                <div className="name-box"><span>Home</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#about" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faUser} className="fa-ico" /></div>
                                <div className="name-box"><span>About</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#skills" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faFileAlt} className="fa-ico" /></div>
                                <div className="name-box"><span>Skills</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#experiences" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faProjectDiagram} className="fa-ico" /></div>
                                <div className="name-box"><span>Experience</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#projects" className="nav-link">
                                <div className="ico-box"><FontAwesomeIcon icon={faLaptopCode} className="fa-ico" /></div>
                                <div className="name-box"><span>Projects</span></div>
                            </a>
                        </li>
                        <li>
                            <a href="#certificates" className="nav-link">
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
                    
                    {!isMobile ? (
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
                    ) : (
                        <div className="expertise">
                            <div className="hv-block">
                                <FaSoftEng className="exp-ico" size={18} />
                                <span>Software Engineering</span>
                            </div>
                            <div className="hv-block">
                                <FaUserShield className="exp-ico" size={18} />
                                <span>Penetration Testing</span>
                            </div>
                            <div className="hv-block">
                                <FaTools className="exp-ico" size={18} />
                                <span>SOC / Blue Teaming</span>
                            </div>
                        
                        </div>
                    )
                    }
                </div>
            </div>
        </section>
    );
}

export default Navigation;

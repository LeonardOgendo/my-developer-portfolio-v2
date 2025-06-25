import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const PreviousExperiences = () => {
    const containerRef = useRef(null);
    const scrollToBlock = (direction) => {
        const container = containerRef.current;
        if (!container) return;

        const scrollAmount = window.innerHeight;
        container.scrollBy({
            top: direction === 'down' ? scrollAmount : -scrollAmount,
            behavior: 'smooth',
        });
    };

    const monthsRecon = calculateMonths('2024-05-11');
    const monthsFreelance = calculateMonths('2022-02-01');

    return (
        <div className="previous-experience-wrapper">
            <div className="scroll-container" ref={containerRef}>
                {/* First: Recon & Asset Mapping Analyst */}
                <section className="experience-block">
                    <div className="previous-role">
                        <div className="role-header">
                            <div className="role-info">
                                <h3 className="job-title">Recon & Asset Mapping Analyst - Bug Bounty</h3>
                                <div className="company-location">
                                    <span><FaBuilding /> BugCrowd</span>
                                    <span><FaMapMarkerAlt /> Remote</span>
                                </div>
                            </div>
                            <div className="role-duration">
                                <span><FaCalendarAlt /> May 2024 – Present</span>
                                <span className="role-months">{monthsRecon} {monthsRecon === 1 ? 'month' : 'months'}</span>
                            </div>
                        </div>

                        <div className="role-timeline">
                            <div className="timeline-marker"></div>
                            <div className="timeline-activities">
                                <div className="activity-item">
                                    <h4>Conducted Comprehensive Reconnaissance on BugCrowd Assets</h4>
                                    <p>Performed passive and active reconnaissance on publicly listed web applications. Utilized tools like Subfinder, Amass, and HTTPx to discover subdomains, technologies, and live endpoints across various scopes.</p>
                                </div>
                                <div className="activity-item">
                                    <h4>Mapped Application Attack Surfaces with Custom Automation</h4>
                                    <p>Created scripts and recon workflows to automate asset mapping and URL fuzzing. Parsed response data to identify exposed directories, API routes, login portals, and potential misconfigurations.</p>
                                </div>
                                <div className="activity-item">
                                    <h4>Sharpened Offensive Recon Skills in Real-World Scenarios</h4>
                                    <p>Applied reconnaissance tactics to mirror real attacker methodologies. Practiced chaining intel with tools like Gau, Waybackurls, and GitHub dorking to build a complete picture of web app exposure.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Second: Software Developer */}
                <section className="experience-block">
                    <div className="previous-role">
                        <div className="role-header">
                            <div className="role-info">
                                <h3 className="job-title">Software Developer</h3>
                                <div className="company-location">
                                    <span><FaBuilding /> Masinde Muliro University</span>
                                    <span><FaMapMarkerAlt /> Kakamega, Kenya</span>
                                </div>
                            </div>
                            <div className="role-duration">
                                <span><FaCalendarAlt /> February 2022 – Present</span>
                                <span className="role-months">{monthsFreelance} {monthsFreelance === 1 ? 'month' : 'months'}</span>
                            </div>
                        </div>

                        <div className="role-timeline">
                            <div className="timeline-marker"></div>
                            <div className="timeline-activities">
                                <div className="activity-item">
                                    <h4>Delivered Full-Stack Web Solutions using Django & MERN</h4>
                                    <p>Developed and deployed secure, API-driven applications using Django REST Framework and Express.js. Built dynamic frontends with React, integrating features like authentication, dashboards, and admin panels.</p>
                                </div>
                                <div className="activity-item">
                                    <h4>Implemented Scalable Architectures with Security in Focus</h4>
                                    <p>Designed backend architectures with modular structure, JWT authentication, and RBAC. Applied input validation, rate limiting, and HTTPS configurations to protect against common vulnerabilities.</p>
                                </div>
                                <div className="activity-item">
                                    <h4>Automated Deployments & Streamlined Workflows</h4>
                                    <p>Configured GitHub Actions for continuous integration and deployment. Reduced delivery time by automating tests, linting, and deploys across freelance projects using Docker, Heroku, and Netlify.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

            {/* Scroll Controls */}
            <div className="scroll-buttons">
                <button onClick={() => scrollToBlock('up')}><FaArrowUp /></button>
                <button onClick={() => scrollToBlock('down')}><FaArrowDown /></button>
            </div>
        </div>
    );
};

export default PreviousExperiences;

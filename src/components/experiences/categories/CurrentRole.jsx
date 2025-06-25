import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const CurrentRole = () => {
    
    const monthsDiff = calculateMonths('2022-02-03');

    return (
        <div className="current-role">
            <div className="role-header">
                <div className="role-info">
                    <h3 className="job-title">Freelance Software Developer</h3>
                    <div className="company-location">
                        <span><FaBuilding /> Online Platforms | Casual Contracts</span>
                        <span><FaMapMarkerAlt /> Remote</span>
                    </div>
                </div>
                <div className="role-duration">
                    <span><FaCalendarAlt /> February 2022 – Present</span>
                    <span className="role-months">{monthsDiff} {monthsDiff === 1 ? 'month' : 'months'}</span>
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
    );
};

export default CurrentRole;

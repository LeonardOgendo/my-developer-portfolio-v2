import projectImage from '../../../assets/certsxprojects/elearning.png'; // Replace with actual image path
import { FaDotCircle } from 'react-icons/fa';

const EhAcademy = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">EH Academy Platform</h2>

            <div className="project-brief-container">
                <p className="project-brief">A platform for ethical hacking learners with course control and dynamic content management.</p>
                <div className="project-tags">
                    <span className="tag creation">Creation</span>
                    <span className="tag level">Intermediate</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">React</span>
                <span className="tech-badge">Node.js</span>
                <span className="tech-badge">Express</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Tailwind CSS</span>
            </div>

            <div className="project-section">
                <h3>Overview</h3>
                <p>
                    EH Academy is a platform dedicated to delivering curated ethical hacking courses and structured learning paths. It includes course management tools, user authentication, and admin privileges to control course visibility, publish updates, and manage user progress. The project emphasizes secure delivery of learning materials, modular course structures, and future support for certifications and quizzes.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="EH Academy Platform Screenshot" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Course module creation and editing</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> User dashboard for tracking progress</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Admin panel with publishing controls</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Secure content access and role-based views</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Designing scalable course relationships</p>
                    <p><FaDotCircle className="bullet-icon" /> Enforcing secure access to paid content</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Built modular course schema with embedded topics</p>
                    <p><FaDotCircle className="bullet-icon" /> Used middleware to restrict route access and token validation</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>In Progress</strong></span>
            </div>
        </div>
    );
};

export default EhAcademy;

import projectImage from '../../../assets/certsxprojects/social-engineering.jpg';
import { FaDotCircle } from 'react-icons/fa';

const PaxfulClone = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">Paxful Auth Clone (Social Engineering Simulation)</h2>

            <div className="project-brief-container">
                <p className="project-brief">A simulated Paxful login and OTP flow built for ethical social engineering learning.</p>
                <div className="project-tags">
                    <span className="tag creation">Creation</span>
                    <span className="tag level">Experimental</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">HTML</span>
                <span className="tech-badge">CSS</span>
                <span className="tech-badge">JavaScript</span>
                <span className="tech-badge">Netlify (Mock Hosting)</span>
            </div>

            <div className="project-section">
                <h3>Overview</h3>
                <p>
                    This project involved cloning the Paxful authentication interface — including login and OTP pages — to simulate a phishing scenario for personal cybersecurity learning. It demonstrated how users could be tricked into submitting credentials, how responses could be silently captured, followed by fake error display and redirection to the real Paxful website. The project remained local and was never deployed online.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="Paxful Clone Screenshot" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> UI replication of Paxful login and OTP</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Form submission logging to simulate credential capture</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Fake error simulation for realism</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Instant redirection to real Paxful site</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Perfecting UI resemblance to avoid suspicion</p>
                    <p><FaDotCircle className="bullet-icon" /> Simulating redirection logic without breaking UX</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Manually copied CSS and inline behaviors from the live site</p>
                    <p><FaDotCircle className="bullet-icon" /> Used `setTimeout` and error-like screens before redirect</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>Completed (Not Deployed)</strong></span>
            </div>
        </div>
    );
};

export default PaxfulClone;

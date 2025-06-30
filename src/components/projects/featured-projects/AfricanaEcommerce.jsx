import projectImage from '../../../assets/certsxprojects/ecommerce.png';
import { FaDotCircle, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const AfricanaEcommerce = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">Africana Ecommerce Platform</h2>

            <div className="project-brief-container">
                <p className="project-brief">An online marketplace for African-inspired fashion and handmade products.</p>
                <div className="project-tags">
                    <span className="tag creation">Creation</span>
                    <span className="tag level">Intermediate</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">DTL</span>
                <span className="tech-badge">Django</span>
                <span className="tech-badge">CSS3</span>
                <span className="tech-badge">PostgreSQL</span>
            </div>

             <div className="view-project">
                <a href="https://github.com/LeonardOgendo/Africana-Ecommerce" target="_blank" rel="noopener noreferrer" ><span className='view-code'><FaGithub className="view-icon" /> View Code</span></a> 
                <span style={{ cursor: 'not-allowed' }} className='view-demo'><FiExternalLink className="view-icon" /> Live Demo</span>
            </div>

            <div className="project-section">
                <h3><FaProjectDiagram className="overview-icon" /> Overview</h3>
                <p>
                    Africana is a full-stack ecommerce solution built to support African designers and artisans. It features secure product listings, payment integration, user authentication, cart functionality, 
                    order history, and a dynamic admin dashboard. The project was crafted to be both mobile-responsive and optimized for performance.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="Africana Ecommerce Platform" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Product catalog with filters</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Cart and checkout workflow</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> M-Pesa & Stripe payment integration</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Admin dashboard with product management</div>
                </div>
            </div>

            <div className="project-split">
               <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Managing role-based access across admin and user interfaces</p>
                    <p><FaDotCircle className="bullet-icon" /> Ensuring accurate inventory updates on checkout</p>
                </div>

                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Used Django's built-in authentication with custom decorators for role-based view access</p>
                    <p><FaDotCircle className="bullet-icon" /> Implemented atomic transactions using Django ORM and `F()` expressions</p>
                </div>

            </div>

            <div className="project-status">
                <span>Status: <strong>In Progress</strong></span>
            </div>
        </div>
    );
};

export default AfricanaEcommerce;

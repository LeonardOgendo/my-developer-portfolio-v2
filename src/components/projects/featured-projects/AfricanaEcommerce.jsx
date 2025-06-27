import projectImage from '../../../assets/certsxprojects/ecommerce.png';
import { FaDotCircle } from 'react-icons/fa';


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
                <span className="tech-badge">Next.js</span>
                <span className="tech-badge">React</span>
                <span className="tech-badge">MongoDB</span>
                <span className="tech-badge">Tailwind CSS</span>
                <span className="tech-badge">Node.js</span>
            </div>

            <div className="project-section">
                <h3>Overview</h3>
                <p>
                    Africana is a full-stack ecommerce solution built to support African designers and artisans. It features secure product listings, payment integration, user authentication, cart functionality, order history, and a dynamic admin dashboard. The project was crafted to be both mobile-responsive and optimized for performance using server-side rendering with Next.js.
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
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Stripe payment integration</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Admin dashboard with product management</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Managing protected routes across admin and user roles</p>
                    <p><FaDotCircle className="bullet-icon" /> Handling real-time inventory updates</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> Used NextAuth for scalable role-based auth</p>
                    <p><FaDotCircle className="bullet-icon" /> Implemented atomic update operations with Mongoose</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>In Progress</strong></span>
            </div>
        </div>
    );
};

export default AfricanaEcommerce;

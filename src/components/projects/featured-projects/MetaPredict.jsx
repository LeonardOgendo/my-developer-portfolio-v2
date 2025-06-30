import projectImage from '../../../assets/certsxprojects/bettin_model.jpeg';
import { FaDotCircle, FaProjectDiagram, FaGithub } from 'react-icons/fa';
import { FiExternalLink } from 'react-icons/fi';

const MetaPredict = () => {
    return (
        <div className="fproject-component">
            <h2 className="fproject-title">MetaPredict</h2>

            <div className="project-brief-container">
                <p className="project-brief">An intelligent football match predictor model built to enhance betting decisions.</p>
                <div className="project-tags">
                    <span className="tag creation">Creation</span>
                    <span className="tag level">Advanced</span>
                </div>
            </div>

            <div className="tech-stack">
                <span className="tech-badge">Python</span>
                <span className="tech-badge">...</span>
            </div>

             <div className="view-project">
                <span className='view-code'><FaGithub className="view-icon" /> View Code</span> 
                <span className='view-demo'><FiExternalLink className="view-icon" /> Live Demo</span>
            </div>

            <div className="project-section">
                <h3><FaProjectDiagram className="overview-icon" /> Overview</h3>
                <p>
                    MetaPredict is a personal project that aims to develop a data-driven football match predictor that will increase the accuracy of outcome-based betting decisions. It scrapes historical data, processes key match features like team strength, form, head-to-head, and uses machine learning models (Random Forest, Logistic Regression) to make probability-based predictions for 1X2, GG, Over/Under and Asian Handicap markets.
                </p>
            </div>

            <div className="project-image">
                <img src={projectImage} alt="MetaPredict Project Screenshot" />
            </div>

            <div className="project-section">
                <h3>Key Features</h3>
                <div className="features-grid">
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Multi-league dataset ingestion</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Feature engineering (form, head-to-head, goals, xG)</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Predictive models for 1X2, GG, Over/Under, AH</div>
                    <div className="feature-card"><FaDotCircle className="bullet-icon" /> Accuracy validation with confusion matrix + AUC</div>
                </div>
            </div>

            <div className="project-split">
                <div className="split-box">
                    <h4>Challenges</h4>
                    <p><FaDotCircle className="bullet-icon" /> Collecting data from various sources automatically</p>
                    <p><FaDotCircle className="bullet-icon" /> Cleaning inconsistent data from multiple football sources</p>
                </div>
                <div className="split-box">
                    <h4>Solutions</h4>
                    <p><FaDotCircle className="bullet-icon" /> ...</p>
                    <p><FaDotCircle className="bullet-icon" /> ...</p>
                </div>
            </div>

            <div className="project-status">
                <span>Status: <strong>In Design</strong></span>
            </div>
        </div>
    );
};

export default MetaPredict;

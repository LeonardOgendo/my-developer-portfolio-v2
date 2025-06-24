import { FaGitAlt, FaGithub, FaDocker } from 'react-icons/fa';
import { SiPostman, SiGithubactions, SiEslint, SiPrettier, SiSonarqube, SiSnyk } from 'react-icons/si';

const DevSecOps = () => {
    const tools = [
        { name: 'Git', icon: <FaGitAlt /> },
        { name: 'GitHub', icon: <FaGithub /> },
        { name: 'GitHub Actions', icon: <SiGithubactions /> },
        { name: 'Docker', icon: <FaDocker /> },
        { name: 'Postman', icon: <SiPostman /> },
        { name: 'ESLint (Learning)', icon: <SiEslint /> },
        { name: 'Prettier (Learning)', icon: <SiPrettier /> },
        { name: 'SonarQube (Learning)', icon: <SiSonarqube /> },
        { name: 'Snyk (Learning)', icon: <SiSnyk /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">DevSecOps & Tools</h2>
                <span>DevSecOps</span>
            </div>

            <p>Tools that support version control, API testing, automation, containerization, and secure coding practices.</p>

            <p className='cards-hls'>
                <span>Git</span> <span>GitHub</span> <span>GitHub Actions</span> <span>Docker</span> <span>Postman</span> <span>ESLint</span> <span>Prettier</span> <span>SonarQube</span> <span>Snyk</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These tools streamline my workflow across development, collaboration, testing, and security — with GitHub Actions, Docker, and static analysis tools currently in active learning.
            </p>

            <div className="stack-grid">
                {tools.map((tool, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{tool.icon}</div>
                        <div className="stack-name">{tool.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DevSecOps;

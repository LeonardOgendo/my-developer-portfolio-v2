import {
    FaShieldAlt,
    FaLock,
    FaBug,
    FaKey,
    FaEyeSlash,
    FaExclamationTriangle
} from 'react-icons/fa';

const ApplicationSecurity = () => {
    const concepts = [
        { name: 'OWASP Top 10', icon: <FaExclamationTriangle /> },
        { name: 'Security Headers', icon: <FaShieldAlt /> },
        { name: 'Input Validation', icon: <FaBug /> },
        { name: 'Secure Authentication', icon: <FaKey /> },
        { name: 'Secrets Management', icon: <FaEyeSlash /> },
        { name: 'Dependency Scanning', icon: <FaLock /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Application Security</h2>
                <span>Secure Development</span>
            </div>

            <p>Concepts I follow to build secure applications and protect systems from common attacks.</p>

            <p className='cards-hls'>
                <span>OWASP</span> <span>Security Headers</span> <span>Input Validation</span> <span>Secure Auth</span> <span>Secrets Mngt</span> <span>Dependency Scanning</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These principles guide my approach to secure software development, ensuring apps I build are resilient against real-world threats.
            </p>

            <div className="stack-grid">
                {concepts.map((concept, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{concept.icon}</div>
                        <div className="stack-name">{concept.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ApplicationSecurity;

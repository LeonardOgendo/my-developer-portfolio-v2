import { FaPython } from 'react-icons/fa';
import { SiGnubash, SiYaml, SiMysql } from 'react-icons/si';

const CLanguages = () => {
    const languages = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'Bash', icon: <SiGnubash /> },
        { name: 'YAML', icon: <SiYaml /> },
        { name: 'SQL', icon: <SiMysql /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Languages</h2>
                <span>Cybersecurity</span>
            </div>

            <p>Languages I use for automation, configuration, shell access, and attack surface testing.</p>

            <p className='cards-hls'>
                <span>Python</span> <span>Bash</span> <span>YAML</span> <span>SQL</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These languages are central to my cybersecurity workflows—from scripting and automation to vulnerability testing and configuration.
            </p>

            <div className="stack-grid">
                {languages.map((language, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{language.icon}</div>
                        <div className="stack-name">{language.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CLanguages;

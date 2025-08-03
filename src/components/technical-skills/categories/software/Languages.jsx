
import { FaPython, FaPhp, FaJs, FaHtml5, FaCss3Alt } from 'react-icons/fa';
import { SiMysql } from 'react-icons/si';

const SLanguages = () => {

    const languages = [
        { name: 'Python', icon: <FaPython /> },
        { name: 'JavaScript (ES6+)', icon: <FaJs /> },
        { name: 'PHP', icon: <FaPhp /> },
        { name: 'HTML5', icon: <FaHtml5 /> },
        { name: 'CSS3', icon: <FaCss3Alt /> },
        { name: 'SQL', icon: <SiMysql /> }
    ]

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Languages</h2>
                <span>Languages</span>
            </div>
            
            <p>Core programming and markup languages</p>

            <p className='cards-hls'><span>Python</span>  <span>JavaScript</span>   <span>PHP</span>   <span>HTML5</span>   <span>CSS3</span>   <span>SQL</span></p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>These languages are the core of my development toolkit, used across both frontend and backend work.</p>
            
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

export default SLanguages;
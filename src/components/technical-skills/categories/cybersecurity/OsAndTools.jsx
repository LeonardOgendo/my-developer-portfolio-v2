import { SiBurpsuite,  } from 'react-icons/si';
import { FaSearch, FaBug, FaDatabase, FaLinux, FaNetworkWired, FaSkull } from 'react-icons/fa';


const OsAndTools = () => {
    const tools = [
        { name: 'Kali Linux', icon: <FaLinux /> },
        { name: 'Nmap', icon: <FaNetworkWired /> },
        { name: 'Vulnerability Scanners', icon: <FaBug /> },
        { name: 'Burp Suite', icon: <SiBurpsuite /> },
        { name: 'Metasploit', icon: <FaSkull /> },
        { name: 'OSINT Tools', icon: <FaSearch /> },
        { name: 'Public Vulnerability Databases', icon: <FaDatabase /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">OS & Tools</h2>
                <span>Cyber Tools</span>
            </div>

            <p>Tools and platforms I use in cybersecurity for enumeration, exploitation, and vulnerability research.</p>

            <p className='cards-hls'>
                <span>Kali Linux</span> <span>Nmap</span> <span>Burp Suite</span> <span>Metasploit</span> <span>OSINT Tools</span> <span>Public DBs</span> <span>+ more</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These tools form the backbone of my offensive and investigative security workflows—used during recon, scanning, exploitation, and research.
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

export default OsAndTools;

import {
    FaWaveSquare,
    FaWindows,
    FaShieldAlt,
    FaBug,
    FaExclamationTriangle,
    FaChartLine,
    FaEye
} from 'react-icons/fa';

const SecurityOperations = () => {
    const tools = [
        { name: 'Wireshark', icon: <FaWaveSquare /> },
        { name: 'Sysmon', icon: <FaWindows /> },
        { name: 'OSSEC', icon: <FaShieldAlt /> },
        { name: 'ClamAV', icon: <FaBug /> },
        { name: 'Suricata (Learning)', icon: <FaExclamationTriangle /> },
        { name: 'Splunk (Learning)', icon: <FaChartLine /> },
        { name: 'Wazuh (Learning)', icon: <FaEye /> }
    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Security Operations</h2>
                <span>Blue Team</span>
            </div>

            <p>Tools I use to detect, monitor, and respond to threats within systems and networks.</p>

            <p className='cards-hls'>
                <span>Wireshark</span> <span>Sysmon</span> <span>OSSEC</span> <span>ClamAV</span> <span>Suricata</span> <span>Splunk</span> <span>Wazuh</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                These tools are part of my Blue Team toolkit—ranging from traffic analysis and endpoint logging to SIEM platforms I'm actively learning.
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

export default SecurityOperations;

import { SiPostgresql, SiMongodb, SiMysql } from 'react-icons/si';

const Databases = () => {
    const databases = [
        { name: 'PostgreSQL', icon: <SiPostgresql /> },
        { name: 'MongoDB', icon: <SiMongodb /> },
        { name: 'MySQL', icon: <SiMysql /> }

    ];

    return (
        <div className='techd-component'>
            <div className="component-header">
                <h2 className="category-title">Databases</h2>
                <span>Databases</span>
            </div>

            <p>Databases I use in full-stack applications for structured and unstructured data management.</p>

            <p className='cards-hls'>
                <span>PostgreSQL</span> <span>MySQL</span> <span>MongoDB</span>
            </p>

            <hr className='component-divider' />

            <h3 className='component-overview'>Overview</h3>
            <p>
                PostgreSQL and MongoDB are my go-to databases for managing complex backend data models—relational and NoSQL.
            </p>

            <div className="stack-grid">
                {databases.map((db, index) => (
                    <div key={index} className="stack-card">
                        <div className="stack-icon">{db.icon}</div>
                        <div className="stack-name">{db.name}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Databases;

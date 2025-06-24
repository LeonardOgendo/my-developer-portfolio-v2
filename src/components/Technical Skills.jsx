// Create a Technical Skills component with title Technical Skills and a section intro 

const TechnicalSkills = () => {
    return (
        <section className="section-body" id="skills">
            <h2 className="section-title">
                <span style={{ color: "#fff" }}>Technical</span>{" "}
                <span style={{ color: "#fd4312" }}>Skills</span>
            </h2>
            <p className="section-intro">
                My proficiency in the following technologies and tools.
            </p>

            <div className="skills-container">
                <div className="skills-sidebar">
                    <div className="skills-tabs">
                        <button className="skills-tab">Software Engineering</button>
                        <button className="skills-tab">Cybersecurity</button>
                    </div>
                    {/* Sidebar items will go here based on selected tab */}
                </div>

                <div className="skills-main">
                    {/* Dynamic content based on selected sidebar item */}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;

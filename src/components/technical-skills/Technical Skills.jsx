import { useState } from "react";
import SLanguages from "./categories/software/Languages";
import Frameworks from "./categories/software/Frameworks";
import DevSecOps from "./categories/software/DevSecOpsTools";
import CloudPlatforms from "./categories/software/CloudPlatforms";
import Databases from "./categories/software/Databases";
import TestingTools from "./categories/software/TestingTools";
import Cms from "./categories/software/Cms";
import CLanguages from "./categories/cybersecurity/CLanguages";
import OsAndTools from "./categories/cybersecurity/OsAndTools";
import PenetrationTesting from "./categories/cybersecurity/PenTesting";
import SecurityOperations from "./categories/cybersecurity/SecurityOperations";
import ApplicationSecurity from "./categories/cybersecurity/ApplicationSecurity";

const TechnicalSkills = () => {

    const sidebarItems = {
        software: [
            'Languages',
            'Frameworks & Libraries',
            'DevSecOps and Tools',
            'Cloud Platforms',
            'Databases',
            'Testing Tools',
            'CMS & Others',
        ],
        cyber: [
            'Languages',
            'OS & Tools',
            'Penetration Testing/Ethical Hacking',
            'Security Operations (Blue Team)',
            'Application Security',
        ],
    };

    const [activeTab, setActiveTab] = useState("software");
    const [activeCategory, setActiveCategory] = useState("Languages");

    const handleTabClick = (tab) => {
        setActiveTab(tab);
    };

    const handleCategoryClick = (category) => {
        setActiveCategory(category);
    };



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
                        <button onClick={() => handleTabClick("software")} className="skills-tab">Software Engineering</button>
                        <button onClick={() => handleTabClick("cyber")} className="skills-tab">Cybersecurity</button>
                    </div>
                    <div className="skills-categories">
                        {sidebarItems[activeTab].map((item, index) => (
                            <button onClick={() => handleCategoryClick(item)} key={index} className="skills-item">{item}</button>
                        ))}
                    </div>                    
                </div>

                <div className="skills-main">
                    {activeTab === "software" && activeCategory === "Languages" && (
                        <SLanguages />
                    )}
                    {activeTab === "software" && activeCategory === "Frameworks & Libraries" && (
                        <Frameworks />
                    )}
                    {activeTab === "software" && activeCategory === "DevSecOps and Tools" && (
                        <DevSecOps />
                    )}
                    {activeTab === "software" && activeCategory === "Cloud Platforms" && (
                        <CloudPlatforms />
                    )}
                    {activeTab === "software" && activeCategory === "Databases" && (
                        <Databases />
                    )}
                    {activeTab === "software" && activeCategory === "Testing Tools" && (
                        <TestingTools />
                    )}
                    {activeTab === "software" && activeCategory === "CMS & Others" && (
                        <Cms />
                    )}

                    {/* Cybersecurity */}

                    {activeTab === "cyber" && activeCategory === "Languages" && (
                        <CLanguages />
                    )}
                    {activeTab === "cyber" && activeCategory === "OS & Tools" && (
                        <OsAndTools />
                    )}
                    {activeTab === "cyber" && activeCategory === "Penetration Testing/Ethical Hacking" && (
                        <PenetrationTesting />
                    )}
                    {activeTab === "cyber" && activeCategory === "Security Operations (Blue Team)" && (
                        <SecurityOperations />
                    )}
                    {activeTab === "cyber" && activeCategory === "Application Security" && (
                        <ApplicationSecurity />
                    )}

                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;

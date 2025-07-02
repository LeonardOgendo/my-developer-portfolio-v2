import { useState } from "react";
import { FaCode, FaCubes, FaServer, FaCloud, FaDatabase, FaVial, FaWpforms, FaTerminal, FaLinux, FaBug, FaShieldAlt, FaLock } from "react-icons/fa";

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
            { title: "Languages", icon: <FaCode />, intro: "Python, JavaScript, more" },
            { title: "Frameworks & Libraries", icon: <FaCubes />, intro: "Django, React, MERN" },
            { title: "DevSecOps and Tools", icon: <FaServer />, intro: "GitHub Actions, Docker" },
            { title: "Cloud Platforms", icon: <FaCloud />, intro: "AWS, Vercel, Netlify" },
            { title: "Databases", icon: <FaDatabase />, intro: "MongoDB, PostgreSQL" },
            { title: "Testing Tools", icon: <FaVial />, intro: "Jest, Pytest, Postman" },
            { title: "CMS & Others", icon: <FaWpforms />, intro: "WordPress, Sanity" },
        ],
        cyber: [
            { title: "Languages", icon: <FaTerminal />, intro: "Python, Bash, C" },
            { title: "OS & Tools", icon: <FaLinux />, intro: "Kali Linux, Wireshark" },
            { title: "Penetration Testing/Ethical Hacking", icon: <FaBug />, intro: "Metasploit, Nmap" },
            { title: "Security Operations (Blue Team)", icon: <FaShieldAlt />, intro: "SIEM, Threat Hunting" },
            { title: "Application Security", icon: <FaLock />, intro: "OWASP, Code Reviews" },
        ]
    };

    const [activeTab, setActiveTab] = useState("software");
    const [activeCategory, setActiveCategory] = useState(sidebarItems.software[0].title);

    const handleTabClick = (tab) => {
        setActiveTab(tab);
        setActiveCategory(sidebarItems[tab][0].title);
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
            <p className="section-subtitle">
                My proficiency in the following technologies and tools.
            </p>

            <div className="skills-container">
                <div className="skills-sidebar">
                    <div className="skills-tabs">
                        <button
                            onClick={() => handleTabClick("software")}
                            className={`skills-tab ${activeTab === "software" ? "active" : ""}`}
                        >
                            Software Engineering
                        </button>
                        <button
                            onClick={() => handleTabClick("cyber")}
                            className={`skills-tab ${activeTab === "cyber" ? "active" : ""}`}
                        >
                            Cybersecurity
                        </button>
                    </div>

                    <div className="skills-categories">
                        {sidebarItems[activeTab].map((item, index) => (
                            <div
                                className="skills-item"
                                key={index}
                                onClick={() => handleCategoryClick(item.title)}
                            >
                                <div className={`skills-icon-wrapper color-${index % 4}`}>
                                    {item.icon}
                                </div>
                                <div className="skills-label">
                                    <span>{item.title}</span>
                                    <p>{item.intro}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="skills-main">
                    {activeTab === "software" && activeCategory === "Languages" && <SLanguages />}
                    {activeTab === "software" && activeCategory === "Frameworks & Libraries" && <Frameworks />}
                    {activeTab === "software" && activeCategory === "DevSecOps and Tools" && <DevSecOps />}
                    {activeTab === "software" && activeCategory === "Cloud Platforms" && <CloudPlatforms />}
                    {activeTab === "software" && activeCategory === "Databases" && <Databases />}
                    {activeTab === "software" && activeCategory === "Testing Tools" && <TestingTools />}
                    {activeTab === "software" && activeCategory === "CMS & Others" && <Cms />}

                    {activeTab === "cyber" && activeCategory === "Languages" && <CLanguages />}
                    {activeTab === "cyber" && activeCategory === "OS & Tools" && <OsAndTools />}
                    {activeTab === "cyber" && activeCategory === "Penetration Testing/Ethical Hacking" && <PenetrationTesting />}
                    {activeTab === "cyber" && activeCategory === "Security Operations (Blue Team)" && <SecurityOperations />}
                    {activeTab === "cyber" && activeCategory === "Application Security" && <ApplicationSecurity />}
                </div>
            </div>
        </section>
    );
};

export default TechnicalSkills;

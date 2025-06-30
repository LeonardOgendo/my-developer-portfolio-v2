import { FaArrowUp, FaArrowDown } from 'react-icons/fa';
import { FaBuilding, FaMapMarkerAlt, FaCalendarAlt } from 'react-icons/fa';
import { useRef } from 'react';
import { calculateMonths } from '../../../shared/utils/dateUtils';

const experienceData = [
    {
        jobTitle: 'Recon & Asset Mapping Analyst - Bug Bounty',
        company: 'BugCrowd',
        location: 'Remote',
        startDate: '2024-05-11',
        dateLabel: 'May 2024 – Present',
        activities: [
            {
                title: 'Conducted Comprehensive Reconnaissance on BugCrowd Assets',
                description:
                    'Performed passive and active reconnaissance on publicly listed web applications. Utilized tools like Subfinder, Amass, and HTTPx to discover subdomains, technologies, and live endpoints across various scopes.',
            },
            {
                title: 'Mapped Application Attack Surfaces with Custom Automation',
                description:
                    'Created scripts and recon workflows to automate asset mapping and URL fuzzing. Parsed response data to identify exposed directories, API routes, login portals, and potential misconfigurations.',
            },
            {
                title: 'Sharpened Offensive Recon Skills in Real-World Scenarios',
                description:
                    'Applied reconnaissance tactics to mirror real attacker methodologies. Practiced chaining intel with tools like Gau, Waybackurls, and GitHub dorking to build a complete picture of web app exposure.',
            },
        ],
    },
    {
        jobTitle: 'Web Application Penetration Tester - Personal Projects / Labs',
        company: 'Self-employed',
        location: 'Remote',
        startDate: '2024-02-01',
        dateLabel: 'February 2024 – Present',
        activities: [
            {
                title: 'Simulated Real-World Exploits Using Pentest Tools & Labs',
                description:
                    'Performed offensive testing on DVWA and OWASP Juice Shop using Burp Suite, OWASP ZAP, Nikto, and manual techniques to replicate attacks like SQL Injection, Cross-Site Scripting, and Command Injection.',
            },
            {
                title: 'Documented Vulnerability Findings Using Joplin',
                description:
                    'Identified OWASP Top 10 vulnerabilities, analyzed exploitation chains, and wrote clear vulnerability reports to simulate professional pentest documentation.',
            },
            {
                title: 'Built Consistent Testing Workflows for Practice Labs',
                description:
                    'Created personal testing flows for efficient recon, exploitation, and reporting in lab environments to simulate structured pentest engagements.',
            },
        ],
    },
    {
        jobTitle: 'Capture The Flag (CTF) Participant',
        company: 'TryHackMe',
        location: 'Remote',
        startDate: '2023-08-01',
        dateLabel: 'August 2023 – Present',
        activities: [
            {
                title: 'Simulated Attacker Behavior in CTF Challenges',
                description:
                    'Solved real-world scenarios on TryHackMe and VulnHub, practicing enumeration, exploitation, and post-exploitation techniques across diverse targets.',
            },
            {
                title: 'Built Local Labs to Reinforce Exploit Chains',
                description:
                    'Set up personal VMs and network environments to practice custom exploits and chained attack paths using Kali Linux and Metasploit.',
            },
            {
                title: 'Sharpened Cybersecurity Thinking Through Gamified Labs',
                description:
                    'Developed attacker mindset by solving practical labs with real tools like Nmap, Hydra, Gobuster, and Netcat.',
            },
        ],
    },
    {
        jobTitle: 'Software Developer',
        company: 'Masinde Muliro University of Science and Technology',
        location: 'Kakamega County, Kenya · On-site',
        startDate: '2023-10-01',
        endDate: '2025-05-20',
        dateLabel: 'October 2023 – May 2025',
        activities: [
            {
                title: 'Led Academic Projects Demonstrating Full Stack Web Development',
                description:
                    'Built Africana E-commerce System and Campus Emergency Response System from scratch, applying both frontend and backend technologies to solve real campus use cases.',
            },
            {
                title: 'Developed Secure Frontends & RESTful Backends',
                description:
                    'Used React for building responsive UIs and Django/Express for API development. Integrated authentication, role-based features, and dynamic data displays.',
            },
            {
                title: 'Applied Best Practices in Git, Deployment, and Database Design',
                description:
                    'Practiced version control with GitHub and deployed projects using platforms like Netlify and Heroku. Designed PostgreSQL and MongoDB schemas to handle structured and unstructured data.',
            },
        ],
    },

    {
        jobTitle: 'IT Technical Support - Internship',
        company: 'KeNHA',
        location: 'Kakamega County, Kenya · On-site',
        startDate: '2024-05-01',
        endDate: '2024-08-14',
        dateLabel: 'May 2024 – August 2024',
        activities: [
            {
                title: 'Resolved Daily Hardware and Software Issues Across Departments',
                description:
                    'Provided end-user support for system errors, configuration issues, and basic troubleshooting of desktop applications and devices.',
            },
            {
                title: 'Performed Regular Maintenance and Security Updates',
                description:
                    'Ensured antivirus, application installations, and system updates were consistently applied across organization endpoints.',
            },
            {
                title: 'Monitored Networks and Maintained IT Asset Inventory',
                description:
                    'Worked with IT team to troubleshoot network issues and kept accurate logs of devices and software for auditing.',
            },
        ],
    },
];

const PreviousExperiences = () => {
    const containerRef = useRef(null);

    const scrollToBlock = (direction) => {
    const container = containerRef.current;
    if (!container) return;

    const blocks = container.querySelectorAll('.experience-block');
    const currentScroll = container.scrollTop;
    const containerHeight = container.clientHeight;

    let targetBlock = null;

    if (direction === 'down') {
        for (let block of blocks) {
            if (block.offsetTop > currentScroll + 10) {
                targetBlock = block;
                break;
            }
        }
    } else {
        for (let i = blocks.length - 1; i >= 0; i--) {
            const block = blocks[i];
            if (block.offsetTop < currentScroll - 10) {
                targetBlock = block;
                break;
            }
        }
    }

    if (targetBlock) {
        container.scrollTo({
            top: targetBlock.offsetTop,
            behavior: 'smooth',
        });
    }
};


    return (
        <div className="previous-experience-wrapper">
            <div className="scroll-container" ref={containerRef}>
                {experienceData.map((exp, index) => {

                    const months = exp.endDate ? calculateMonths(exp.startDate, exp.endDate) : calculateMonths(exp.startDate);

                    return (
                        <section className="experience-block" key={index}>
                            <div className="previous-role">
                                <div className="role-header">
                                    <div className="role-info">
                                        <h3 className="job-title">{exp.jobTitle}</h3>
                                        <div className="company-location">
                                            <span><FaBuilding /> {exp.company}</span>
                                            <span><FaMapMarkerAlt /> {exp.location}</span>
                                        </div>
                                    </div>
                                    <div className="role-duration">
                                        <span><FaCalendarAlt /> {exp.dateLabel}</span>
                                        <span className="role-months">
                                            {months} {months === 1 ? 'month' : 'months'}
                                        </span>
                                    </div>
                                </div>

                                <div className="role-timeline">
                                    <div className="timeline-marker"></div>
                                    <div className="timeline-activities">
                                        {exp.activities.map((activity, idx) => (
                                            <div className="activity-item" key={idx}>
                                                <h4>{activity.title}</h4>
                                                <p>{activity.description}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}
            </div>

            <div className="scroll-buttons">
                <button onClick={() => scrollToBlock('up')}><FaArrowUp /></button>
                <button onClick={() => scrollToBlock('down')}><FaArrowDown /></button>
            </div>
        </div>
    );
};

export default PreviousExperiences;

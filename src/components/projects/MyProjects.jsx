import { useState } from "react";
import Cers from "./featured-projects/Cers";
import AfricanaEcommerce from "./featured-projects/AfricanaEcommerce";
import EhAcademy from "./featured-projects/EhAcademy";
import MetaPredict from "./featured-projects/MetaPredict";
import PaxfulClone from "./featured-projects/PaxfulClone";
import TechConsultant from "./featured-projects/TechConsultant";

const featuredProjects = [
  'Campus Emergency Response System',
  'Africana Ecommerce Platform',
  'EH Academy Platform',
  'metaPredict',
  'Paxful Clone',
  'Tech Consultant',
]


const MyProjects = () => {
    const [selectedProject, setSelectedProject] = useState('Campus Emergency Response System');

    const handleProjectClick = (project) => {
      setSelectedProject(project);
    };

    return (
        <section className="section-body" id="projects">
            <div className="projects-top">
                <div className="projects-left">
                    <h2 className="projects-title">Projects</h2>
                    <p className="projects-subtitle">Featured Projects</p>
                </div>

                <div className="projects-right">
                    <p className="projects-count">35+ <br /> GitHub Repos</p>
                    <a
                        href="https://github.com/yourusername"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="github-button"
                    >
                        See GitHub
                    </a>
                </div>
            </div>

            <div className="projects-body">
                <div className="projects-sidebar">
                    {featuredProjects.map((project, index) => (
                        <div className="project-card" key={index} onClick={() => handleProjectClick(project)}>
                            <span>{project}</span>
                        </div>
                    ))}
                </div>

                <div className="projects-main">
                    {selectedProject === 'Campus Emergency Response System' && (
                        <Cers />
                    )}
                    {selectedProject === 'Africana Ecommerce Platform' && (
                        <AfricanaEcommerce />
                    )}
                    {selectedProject === 'EH Academy Platform' && (
                        <EhAcademy />
                    )}
                    {selectedProject === 'metaPredict' && (
                        <MetaPredict />
                    )}
                    {selectedProject === 'Paxful Clone' && (
                        <PaxfulClone />
                    )}
                    {selectedProject === 'Tech Consultant' && (
                        <TechConsultant />
                    )}
                </div>
            </div>
        </section>
    );
};

export default MyProjects;

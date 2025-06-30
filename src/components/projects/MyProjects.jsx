import { useState } from "react";

import { FaGithub, FaAmbulance, FaShoppingCart, FaGraduationCap, FaChartLine, FaTools } from "react-icons/fa";

import Cers from "./featured-projects/Cers";
import AfricanaEcommerce from "./featured-projects/AfricanaEcommerce";
import EhAcademy from "./featured-projects/EhAcademy";
import MetaPredict from "./featured-projects/MetaPredict";
import PaxfulClone from "./featured-projects/PaxfulClone";
import TechConsultant from "./featured-projects/TechConsultant";

const featuredProjects = [
  {
    icon: <FaAmbulance />,
    title: 'Campus Emergency Response System',
    intro: 'Fast campus alerting sys',
  },
  {
    icon: <FaShoppingCart />,
    title: 'Africana Ecommerce Platform',
    intro: 'Pan-African product store',
  },
  {
    icon: <FaGraduationCap />,
    title: 'EH Academy Platform',
    intro: 'Ethical hacking learning acad',
  },
  {
    icon: <FaChartLine />,
    title: 'metaPredict',
    intro: 'Data-driven match predictions',
  },
  {
    icon: <FaShoppingCart />,
    title: 'Paxful Clone',
    intro: 'Social Engineering project',
  },
  {
    icon: <FaTools />,
    title: 'Tech Consultant',
    intro: '"What we do" platform',
  },
];

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState('Campus Emergency Response System');

  const handleProjectClick = (projectTitle) => {
    setSelectedProject(projectTitle);
  };

  return (
    <section className="section-body" id="projects">
      <div className="projects-top">
        <div className="projects-left">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Featured Projects | Selected Highlights</p>
        </div>

        <div className="projects-right">
          <p className="projects-count">35+ <br /> GitHub Repos</p>
          <a
            href="https://github.com/LeonardOgendo/"
            target="_blank"
            rel="noopener noreferrer"
            className="github-button"
          >
            <FaGithub /> See GitHub
          </a>
        </div>
      </div>

      <div className="projects-body">
        <div className="projects-sidebar">
          {featuredProjects.map((project, index) => (
            <div className="project-card" key={index} onClick={() => handleProjectClick(project.title)}>
              <div className={`project-icon-wrapper color-${index % 4}`}>
                {project.icon}
              </div>
              <div className="project-card-label">
                <span>{project.title}</span>
                <p>{project.intro}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="projects-main">
          {selectedProject === 'Campus Emergency Response System' && <Cers />}
          {selectedProject === 'Africana Ecommerce Platform' && <AfricanaEcommerce />}
          {selectedProject === 'EH Academy Platform' && <EhAcademy />}
          {selectedProject === 'metaPredict' && <MetaPredict />}
          {selectedProject === 'Paxful Clone' && <PaxfulClone />}
          {selectedProject === 'Tech Consultant' && <TechConsultant />}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;

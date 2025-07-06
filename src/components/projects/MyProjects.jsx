import { useState } from "react";
import Select from "react-select";
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

const projectComponents = {
  'Campus Emergency Response System': <Cers />,
  'Africana Ecommerce Platform': <AfricanaEcommerce />,
  'EH Academy Platform': <EhAcademy />,
  'metaPredict': <MetaPredict />,
  'Paxful Clone': <PaxfulClone />,
  'Tech Consultant': <TechConsultant />,
};

const MyProjects = () => {
  const [selectedProject, setSelectedProject] = useState('Campus Emergency Response System');

  const handleProjectClick = (projectTitle) => {
    setSelectedProject(projectTitle);
  };

  const selectOptions = featuredProjects.map((project, index) => ({
    value: project.title,
    label: (
      <div className={`custom-option-wrapper color-${index % 4}`}>
        <div className="custom-option-icon">{project.icon}</div>
        <div className="custom-option-text">
          <span className="custom-option-title">{project.title}</span>
          <span className="custom-option-intro">{project.intro}</span>
        </div>
      </div>
    )
  }));

  return (
    <section className="section-body" id="projects">
      <div className="projects-top">
        <div className="projects-left">
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Featured Projects | Selected Highlights</p>
        </div>

        <div className="projects-right">
          <p className="projects-count">35+ <br /> GitHub Repos</p>
          <a href="https://github.com/LeonardOgendo/" target="_blank" rel="noopener noreferrer" className="github-button">
            <FaGithub /> See GitHub
          </a>
        </div>
      </div>

      <div className="projects-body">
        {/* Mobile Dropdown */}
        <div className="projects-mobile-dropdown">
          <Select
            options={selectOptions}
            onChange={(option) => handleProjectClick(option.value)}
            isSearchable={false}
            classNamePrefix="custom-react-select"
          />
        </div>

        {/* Sidebar for desktop/tablet */}
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
          {projectComponents[selectedProject]}
        </div>
      </div>
    </section>
  );
};

export default MyProjects;

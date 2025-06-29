import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';

import ecCouncilLogo from '../assets/certsxprojects/ec-council-logo.png';
import ciscoLogo from '../assets/certsxprojects/cisco-logo.png';
import freeCodeLogo from '../assets/certsxprojects/freecodecamp-logo.png';

import ecCouncilCB from '../assets/certsxprojects/csec-business.png';
import freeCodeFdl from '../assets/certsxprojects/freecodecamp-fdl.png';
import netAcadP from '../assets/certsxprojects/participation-netacad.png';
import ciscoEH from '../assets/certsxprojects/cisco-eh-acad.jpg';
import freeCodeRWD from '../assets/certsxprojects/freecode-web-cert.png';

const certData = [
  {
    'orgLogo': ecCouncilLogo,
    'orgName': "EC-Council",
    'title': "Cybersecurity for Business",
    'certImg': ecCouncilCB,
    'skills': ["Reconnaissance", "Network Security", "Vulnerability Analysis", "Ethical Hacking"],
    'link': "#"
  },
  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Front End Development Libraries",
    'certImg': freeCodeFdl,
    'skills': ["Responsive Design", "JavaScript Libraries", "Front-End Frameworks"],
    'link': "#"
  },
  {
    'orgLogo': ciscoLogo,
    'orgName': "Cisco",
    'title': "Learn-A-Thon",
    'certImg': netAcadP,
    'skills': ["Ethical Hacking", "Network Security", "Vulnerability Analysis"],
    'link': "#"
  },
  {
    'orgLogo': ciscoLogo,
    'orgName': "Cisco",
    'title': "Ethical Hacker",
    'certImg': ciscoEH,
    'skills': ["Network Security", "Cybersecurity Fundamentals", "Threat Analysis"],
    'link': "#"
  },
  {
    'orgLogo': freeCodeLogo,
    'orgName': "freeCodeCamp",
    'title': "Responsive Web Design",
    'certImg': freeCodeRWD,
    'skills': ["Responsive Design", "JavaScript Libraries", "Front-End Frameworks"],
    'link': "#"
  },
    
];

const Certificates = () => {
  const carouselRef = useRef(null);

  const scrollLeft = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: -width, behavior: 'smooth' });
  };

  const scrollRight = () => {
    const width = carouselRef.current.offsetWidth;
    carouselRef.current.scrollBy({ left: width, behavior: 'smooth' });
  };

  return (
    <section className="certificates-section" id="certificates">
      <div className="certificates-top">
        <div className="cert-info">
          <h2 className='section-title'>Certificates</h2>
          <p className='section-subtitle'>Software Engineering & Cybersecurity</p>
        </div>
        <div className="cert-stats">
          <h3>Verified Credentials</h3>
          <p>5+ Certifications</p>
        </div>
      </div>

      <div className="certificates-carousel-wrapper">
        <button className="scroll-button left" onClick={scrollLeft}>
          <FaChevronLeft />
        </button>

        <div className="certificates-carousel" ref={carouselRef}>
          {certData.map((cert, index) => (
            <div className="cert-card" key={index}>
              <div className="cert-card-left">
                <div className="org-name">
                  <img src={cert.orgLogo} alt={cert.orgName} />
                  <span>{cert.orgName}</span>
                </div>
                <h4 className="cert-title">{cert.title}</h4>
                <img src={cert.certImg} alt={`${cert.title} Certificate`} className="cert-image" />
              </div>

              <div className="cert-card-right">
                <h5 className="cert-overview">Overview</h5>
                <h5>Skills Gained</h5>
                <div className="skills-tags">
                  {cert.skills.map((skill, i) => (
                    <span key={i}>{skill}</span>
                  ))}
                </div>
                <button className="view-credential">View Credential</button>
              </div>
            </div>
          ))}
        </div>

        <button className="scroll-button right" onClick={scrollRight}>
          <FaChevronRight />
        </button>
      </div>
    </section>
  );
};

export default Certificates;

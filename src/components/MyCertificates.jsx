import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { useRef } from 'react';
import ecCouncilLogo from '../assets/certsxprojects/ec-council-logo.png';
import certImg from '../assets/certsxprojects/csec-business.png';

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
                    <h2>Certificates</h2>
                    <p>Software Engineering & Cybersecurity</p>
                </div>
                <div className="cert-stats">
                    <h3>Verified Credentials</h3>
                    <p>7+ Certifications</p>
                </div>
            </div>

            <div className="certificates-carousel-wrapper">
                <button className="scroll-button left" onClick={scrollLeft}>
                    <FaChevronLeft />
                </button>

                <div className="certificates-carousel" ref={carouselRef}>
                    {/* CARD 1 */}
                    <div className="cert-card">
                        <div className="cert-card-left">
                            <div className="org-name">
                                <img src={ecCouncilLogo} alt="EC Council" />
                                <span>EC-Council</span>
                            </div>
                            <h4 className="cert-title">Cybersecurity for Business</h4>
                            <img src={certImg} alt="CEH Certificate" className="cert-image" />
                        </div>

                        <div className="cert-card-right">
                            <h5>Skills Gained</h5>
                            <div className="skills-tags">
                                <span>Reconnaissance</span>
                                <span>Network Security</span>
                                <span>Vulnerability Analysis</span>
                                <span>Ethical Hacking</span>
                            </div>
                            <button className="view-credential">View Credential</button>
                        </div>
                    </div>

                    {/* CARD 2 */}
                    <div className="cert-card">
                        <div className="cert-card-left">
                            <div className="org-name">
                                <img src={ecCouncilLogo} alt="EC Council" />
                                <span>EC-Council</span>
                            </div>
                            <h4 className="cert-title">Advanced Network Defense</h4>
                            <img src={certImg} alt="Network Defense Certificate" className="cert-image" />
                        </div>

                        <div className="cert-card-right">
                            <h5>Skills Gained</h5>
                            <div className="skills-tags">
                                <span>Firewall Hardening</span>
                                <span>Secure Protocols</span>
                                <span>Penetration Testing</span>
                            </div>
                            <button className="view-credential">View Credential</button>
                        </div>
                    </div>
                </div>

                <button className="scroll-button right" onClick={scrollRight}>
                    <FaChevronRight />
                </button>
            </div>
        </section>
    );
};

export default Certificates;

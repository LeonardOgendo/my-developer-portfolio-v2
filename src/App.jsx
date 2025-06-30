import { useRef, useEffect, useState } from 'react';

import './styles/App.css';
import './styles/styles.css';

import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from './components/technical-skills/Technical Skills';
import Experiences from './components/experiences/Experiences';
import MyProjects from './components/projects/MyProjects';
import MyCertificates from "./components/MyCertificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            // Block screens smaller than 1024px (laptop size)
            setIsSmallScreen(window.innerWidth < 1024);
        };

        handleResize(); // Run on first load
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const options = {
            threshold: 0.6,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
        }, options);

        if (skillsRef.current) observer.observe(skillsRef.current);
        if (experienceRef.current) observer.observe(experienceRef.current);

        return () => observer.disconnect();
    }, []);

    if (isSmallScreen) {
        return (
            <div style={{
                height: '100vh',
                display: 'flex',
                justifyContent: 'center',
                paddingTop: '40%',
                padding: '2rem',
                textAlign: 'center',
                backgroundColor: '#222',
            }}>
                <p style={{ fontSize: '1.5rem', maxWidth: '500px', color: '#fff' }}>
                   This portfolio is Currently optimized for larger screens<br />
                    <br />
                   <hr />
                   <br />
                    Please view it on a laptop or desktop for the best experience.
                </p>
            </div>
        );
    }

    return (
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />

                <section
                    id="technicalskills"
                    ref={skillsRef}
                    className="full-screen-section"
                >
                    <TechnicalSkills />
                </section>

                <section
                    id="experience"
                    ref={experienceRef}
                    className="full-screen-section"
                >
                    <Experiences />
                </section>

                <MyProjects />
                <MyCertificates />
                <Contact />
                <Footer />
            </div>
        </div>
    );
}

export default App;

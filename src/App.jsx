import { useRef, useEffect } from 'react';

import './styles/App.css';
import './styles/styles.css';

import Navigation from "./components/Navigation";
import AboutMe from "./components/AboutMe";
import TechnicalSkills from './components/technical-skills/Technical Skills';
import Experiences from './components/experiences/Experiences';
import MyProjects from "./components/MyProjects";
import MyCertificates from "./components/MyCertificates";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
    const skillsRef = useRef(null);
    const experienceRef = useRef(null);

    useEffect(() => {
        const options = {
            threshold: 0.6, // Trigger when 60% of the section is visible
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

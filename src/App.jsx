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


function App(){
    return(
        <div className="App">
            <Navigation />
            <div className="grey-body">
                <AboutMe />
                <TechnicalSkills />
                <Experiences />
                <MyProjects />
                <MyCertificates />
                <Contact />
                <Footer />
            </div>
            
        </div>
        
    )
}

export default App
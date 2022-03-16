import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./Sections/AboutSection";
import ContactSection from "./Sections/ContactSection";
import HomeSection from "./Sections/HomeSection";
import ProjectsSection from "./Sections/ProjectsSection";
import SkillsSection from "./Sections/SkillsSection";

const App = () => {
    return (
        <>
            <NavBar />
            <main>
                <HomeSection />
                <AboutSection />
                <SkillsSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default App;

import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./Sections/AboutSection";
import ContactSection from "./Sections/ContactSection";
import HomeSection from "./Sections/HomeSection";
import ProjectsSection from "./Sections/ProjectsSection";

const App = () => {
    return (
        <>
            <NavBar />
            <main>
                <HomeSection />
                <AboutSection />
                <ProjectsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default App;

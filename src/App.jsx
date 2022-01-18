import NavBar from "./components/NavBar/NavBar";
import AboutSection from "./Sections/AboutSection";
import HomeSection from "./Sections/HomeSection";
import ProjectsSection from "./Sections/ProjectsSection";

const App = () => {
    return (
        <>
            <NavBar />
            <HomeSection />
            <AboutSection />
            <ProjectsSection />
        </>
    );
};

export default App;

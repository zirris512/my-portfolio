import SingleProject from "../components/SingleProject/SingleProject";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import { projects } from "../data/data.json";

const ProjectsSection = () => {
    return (
        <SectionWrapper title="Projects" id="projects">
            <div>
                {projects.map((project) => (
                    <SingleProject projectData={project} key={project.id} />
                ))}
            </div>
        </SectionWrapper>
    );
};

export default ProjectsSection;

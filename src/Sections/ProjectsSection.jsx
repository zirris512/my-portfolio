import styles from "./ProjectsSection.module.scss";
import { projects } from "../data/data.json";
import SingleProject from "../components/SingleProject/SingleProject";

const ProjectsSection = () => {
    return (
        <section>
            <h1>Projects</h1>
            <div>
                {projects.map((project) => (
                    <SingleProject projectData={project} key={project.id} />
                ))}
            </div>
        </section>
    );
};

export default ProjectsSection;

import SingleProject from "../components/SingleProject/SingleProject";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import { projects } from "../data/data.json";
import styles from "./ProjectsSection.module.scss";

const ProjectsSection = () => {
	return (
		<SectionWrapper title="Projects" id="projects">
			<div className={styles.projects}>
				{projects.map((project) => (
					<SingleProject projectData={project} key={project.id} />
				))}
			</div>
		</SectionWrapper>
	);
};

export default ProjectsSection;

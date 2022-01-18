import styles from "./SingleProject.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";

const SingleProject = ({ projectData }) => {
    const technologiesString = projectData.technologies.join(", ");

    return (
        <article className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <img
                    src={projectData.imgUrl}
                    alt={projectData.imgAlt}
                    className={styles.projectImg}
                />
            </div>
            <div className={styles.projectContent}>
                <div>
                    <h3>{projectData.name}</h3>
                    <p className={styles.techList}>{technologiesString}</p>
                </div>
                <div>
                    <p>{projectData.description}</p>
                    <a
                        href={projectData.deployedUrl}
                        target="_blank"
                        className={styles.projectLink}
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                    <a
                        href={projectData.github}
                        target="_blank"
                        className={styles.projectLink}
                    >
                        <FontAwesomeIcon icon={faGithub} />
                    </a>
                </div>
            </div>
        </article>
    );
};

export default SingleProject;

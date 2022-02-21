import styles from "./SingleProject.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import ImageLoading from "../ImageLoading/ImageLoading";

const SingleProject = ({ projectData }) => {
    const technologiesString = projectData.technologies.join(", ");

    return (
        <article className={styles.projectContainer}>
            <div className={styles.projectImgContainer}>
                <ImageLoading
                    image={projectData.imgUrl}
                    imgAlt={projectData.imgAlt}
                    imgClass={styles.projectImg}
                />
            </div>
            <div className={styles.projectContent}>
                <div>
                    <h2>{projectData.name}</h2>
                    <p className={styles.techList}>{technologiesString}</p>
                </div>
                <div>
                    <p>{projectData.description}</p>
                    <a
                        href={projectData.deployedUrl}
                        target="_blank"
                        aria-label={`${projectData.name} deployment link`}
                        className={styles.projectLink}
                    >
                        <FontAwesomeIcon icon={faGlobe} />
                    </a>
                    <a
                        href={projectData.github}
                        target="_blank"
                        aria-label={`${projectData.name} github link`}
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

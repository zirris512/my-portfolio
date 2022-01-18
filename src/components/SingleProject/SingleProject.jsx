import styles from "./SingleProject.module.scss";

const SingleProject = ({ projectData }) => {
    const technologiesString = projectData.technologies.join(", ");

    return (
        <div>
            <div>
                <img src={projectData.imgUrl} alt={projectData.imgAlt} />
            </div>
            <div>
                <h2>{projectData.name}</h2>
                <p>{technologiesString}</p>
                <p>{projectData.description}</p>
                <a href={projectData.deployedUrl}></a>
                <a href={projectData.github}></a>
            </div>
        </div>
    );
};

export default SingleProject;

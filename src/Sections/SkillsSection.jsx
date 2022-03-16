import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import styles from "./SkillsSection.module.scss";

const SkillsSection = () => {
    const skills = [
        "HTML",
        "CSS",
        "JavaScript",
        "TypeScript",
        "React",
        "Redux",
        "Vue",
        "Bootstrap",
        "TailwindCss",
        "Scss",
        "MySQL",
        "PostgreSQL",
        "MongoDB",
        "Nodejs",
        "Express",
        "Python",
    ];
    return (
        <SectionWrapper id="skills" title="Skills">
            <ul className={styles.skillsList}>
                {skills.map((skill, idx) => (
                    <li key={idx}>
                        <p className={styles.skillItemText}>{skill}</p>
                    </li>
                ))}
            </ul>
        </SectionWrapper>
    );
};

export default SkillsSection;

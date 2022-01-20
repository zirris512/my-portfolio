import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import styles from "./AboutSection.module.scss";

const AboutSection = () => {
    return (
        <SectionWrapper title="About" id="about">
            <div className={styles.container}>
                <div className={styles.imgContainer}>
                    <img
                        src="/assets/pc_geek.svg"
                        alt="drawing of boy on pc"
                        className={styles.boyImg}
                    />
                </div>
                <div className={styles.content}>
                    <p>
                        Full Stack Web Developer with a minor background in
                        psychology and engineering to build a better user
                        experience on the web. Recently earned a certificate in
                        Full Stack Development from the University of Kansas,
                        with newly learned skills in Javascript, React.js,
                        Vuejs, MongoDB, and more. I have been known as a strong
                        leader who will take charge by my peers and guide
                        everyone to our goals. I am also a quick learner that
                        can remain calm when under pressure and come up with
                        solutions when things get tough. My aim is to create an
                        impactful and memorable user-experience for my audience.
                        I worked on a project where I applied the Phaser.js
                        engine to a React.js app in a group of five to make an
                        escape room like game where users could log in through
                        authentication via Passport and MongoDB and play through
                        a sequence of puzzles to escape a room. I am excited to
                        use my skills on future projects as part of a driven
                        team to create memorable experiences for users on the
                        web.
                    </p>
                    <a
                        href="https://docs.google.com/document/d/1ivkVfy2Kq8K7yvWJ6UAEYLeBovfalzOZm9xEpAtaHcY/edit?usp=sharing"
                        target="_blank"
                        className={styles.resumeButton}
                    >
                        View Resume
                    </a>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default AboutSection;

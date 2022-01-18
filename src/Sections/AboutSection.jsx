import styles from "./AboutSection.module.scss";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";

const AboutSection = () => {
    return (
        <SectionWrapper title="About">
            <p>
                Full Stack Web Developer with a minor background in psychology
                and engineering to build a better user experience on the web.
                Recently earned a certificate in Full Stack Development from the
                University of Kansas, with newly learned skills in Javascript,
                React.js, Vuejs, MongoDB, and more. I have been known as a
                strong leader who will take charge by my peers and guide
                everyone to our goals. I am also a quick learner that can remain
                calm when under pressure and come up with solutions when things
                get tough. My aim is to create an impactful and memorable
                user-experience for my audience. I worked on a project where I
                applied the Phaser.js engine to a React.js app in a group of
                five to make an escape room like game where users could log in
                through authentication via Passport and MongoDB and play through
                a sequence of puzzles to escape a room. I am excited to use my
                skills on future projects as part of a driven team to create
                memorable experiences for users on the web.
            </p>
        </SectionWrapper>
    );
};

export default AboutSection;

import styles from "./HomeSection.module.scss";
import profilePic from "../assets/profile-pic.jpg";
import ContactLinks from "../components/ContactLinks/ContactLinks";

const HomeSection = () => {
    return (
        <header className={styles.heroHeader}>
            <div className={styles.heroTitle}>
                <h1>Hello, my name is Brent.</h1>
            </div>
            <div className={styles.imageContainer}>
                <img
                    src={profilePic}
                    alt="Profile picture"
                    className={styles.profilePic}
                />
            </div>
            <div className={styles.heroSubtitle}>
                <h2>Full-Stack Developer</h2>
            </div>
            <ContactLinks />
        </header>
    );
};

export default HomeSection;

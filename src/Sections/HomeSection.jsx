import styles from "./HomeSection.module.scss";
import profilePic from "../assets/profile-pic.jpg";
import spaceBg from "../assets/space-bg.jpg";

const HomeSection = () => {
    return (
        <header className={styles.heroHeader}>
            <div className={styles.heroTitle}>
                <h2>Hello, my name is Brent.</h2>
            </div>
            <div>
                <img src={profilePic} alt="Profile picture" className={styles.profilePic} />
            </div>
        </header>
    );
};

export default HomeSection;

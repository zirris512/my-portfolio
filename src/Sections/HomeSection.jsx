import styles from "./HomeSection.module.scss";
import profilePic from "/assets/profile-pic.jpg";
import ContactLinks from "../components/ContactLinks/ContactLinks";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons";
import ImageLoading from "../components/ImageLoading/ImageLoading";

const HomeSection = () => {
	return (
		<header className={styles.heroHeader}>
			<div className={styles.heroTitle}>
				<h1>
					Hello, I am <span className={styles.name}>Brent</span>.
				</h1>
			</div>
			<div className={styles.imageContainer}>
				<ImageLoading image={profilePic} imgAlt="profile picture" imgClass={styles.profilePic} />
			</div>
			<div className={styles.heroSubtitle}>
				<h2>Full-Stack Developer</h2>
			</div>
			<ContactLinks />
			<a className={styles.scrollDownIcon} href="#about" aria-label="scroll down button">
				<FontAwesomeIcon icon={faChevronDown} />
			</a>
		</header>
	);
};

export default HomeSection;

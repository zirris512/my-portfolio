import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedin,
    faTwitter,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "./ContactLinks.module.scss";

const ContactLinks = () => {
    return (
        <div className={styles.links}>
            <button className={styles.link}>
                <FontAwesomeIcon icon={faLinkedin} />
            </button>
            <button className={styles.link}>
                <FontAwesomeIcon icon={faTwitter} />
            </button>
            <button className={styles.link}>
                <FontAwesomeIcon icon={faGithub} />
            </button>
            <button className={styles.link}>
                <FontAwesomeIcon icon={faEnvelope} />
            </button>
        </div>
    );
};

export default ContactLinks;

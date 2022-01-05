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
            <a
                href="https://www.linkedin.com/in/brentleigh-edwards-0b29a3140/"
                target="_blank"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
                href="https://twitter.com/BrentEd72114176"
                target="_blank"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faTwitter} />
            </a>
            <a
                href="https://github.com/zirris512"
                target="_blank"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
                href="mailto:brentedwards512@gmail.com"
                target="_blank"
                className={styles.link}
            >
                <FontAwesomeIcon icon={faEnvelope} />
            </a>
        </div>
    );
};

export default ContactLinks;

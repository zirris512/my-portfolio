import styles from "./ContactSection.module.scss";
import SectionWrapper from "../components/SectionWrapper/SectionWrapper";
import ContactLinks from "../components/ContactLinks/ContactLinks";

const ContactSection = () => {
	return (
		<SectionWrapper title="Contact Me" id="contact">
			<div className={styles.container}>
				<p>Interested in connecting with me? Reach out to me using any of the methods below!</p>
				<ContactLinks />
			</div>
		</SectionWrapper>
	);
};

export default ContactSection;

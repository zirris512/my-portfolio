import styles from "./SectionWrapper.module.scss";

const SectionWrapper = (props) => {
	return (
		<section className={styles.wrapper} id={props.id}>
			<h1 className={styles.header}>{props.title}</h1>
			<div className={styles.container}>{props.children}</div>
		</section>
	);
};

export default SectionWrapper;

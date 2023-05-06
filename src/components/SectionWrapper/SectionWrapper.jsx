import { useEffect, useRef, useState } from "react";
import styles from "./SectionWrapper.module.scss";

const SectionWrapper = (props) => {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries, observer) => {
				if (entries[0].isIntersecting) {
					setIsVisible(true);
					observer.unobserve(sectionRef.current);
				}
			},
			{ threshold: 0.1 }
		);

		observer.observe(sectionRef.current);

		return () => observer.disconnect();
	}, []);

	return (
		<section
			className={`${styles.wrapper} ${isVisible ? styles.visible : ""}`}
			id={props.id}
			ref={sectionRef}
		>
			<h1 className={styles.header}>{props.title}</h1>
			<div className={styles.container}>{props.children}</div>
		</section>
	);
};

export default SectionWrapper;

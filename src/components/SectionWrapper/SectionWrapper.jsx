import styles from "./SectionWrapper.module.scss";

const SectionWrapper = (props) => {
    return (
        <section className={styles.wrapper}>
            <h1 className={styles.header}>{props.title}</h1>
            {props.children}
        </section>
    );
};

export default SectionWrapper;

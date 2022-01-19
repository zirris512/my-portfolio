import styles from "./Footer.module.scss";

const Footer = () => {
    const year = new Date().getFullYear();

    return (
        <footer className={styles.footer}>
            <p>Brent Edwards &copy; {year}</p>
        </footer>
    );
};

export default Footer;

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import styles from "./NavBar.module.scss";

const NavBar = () => {
    const [scroll, setScroll] = useState(false);
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            const scrollCheck = window.scrollY > 10;
            if (scrollCheck !== scroll) {
                setScroll(scrollCheck);
            }
        };

        document.addEventListener("scroll", onScroll);

        return () => {
            document.removeEventListener("scroll", onScroll);
        };
    }, [scroll, setScroll]);

    const navBtnHandler = (e) => {
        if (window.innerWidth <= 1000) {
            setNavOpen((val) => !val);
        }
    };

    return (
        <nav className={`${styles.nav} ${scroll && styles.navScrolling}`}>
            <div className={styles.navHeader}>
                <a
                    href="#"
                    className={styles.navHeaderLink}
                    onClick={() => setNavOpen(false)}
                >
                    Brent Edwards
                </a>
            </div>
            <div className={`${styles.navList} ${!navOpen && styles.active}`}>
                <ul className={styles.navListItems}>
                    <li>
                        <a
                            href="#"
                            className={styles.navListItemLink}
                            onClick={navBtnHandler}
                        >
                            Home
                        </a>
                    </li>
                    <li>
                        <a
                            href="#about"
                            className={styles.navListItemLink}
                            onClick={navBtnHandler}
                        >
                            About
                        </a>
                    </li>
                    <li>
                        <a
                            href="#skills"
                            className={styles.navListItemLink}
                            onClick={navBtnHandler}
                        >
                            Skills
                        </a>
                    </li>
                    <li>
                        <a
                            href="#projects"
                            className={styles.navListItemLink}
                            onClick={navBtnHandler}
                        >
                            Projects
                        </a>
                    </li>
                    <li>
                        <a
                            href="#contact"
                            className={styles.navListItemLink}
                            onClick={navBtnHandler}
                        >
                            Contact
                        </a>
                    </li>
                </ul>
            </div>
            <button
                className={styles.mobileNavBtn}
                onClick={navBtnHandler}
                aria-label={`nav ${navOpen ? "close" : "open"} button`}
            >
                {!navOpen ? (
                    <FontAwesomeIcon icon={faBars} />
                ) : (
                    <FontAwesomeIcon icon={faTimes} />
                )}
            </button>
            {navOpen && (
                <div className={styles.backdrop} onClick={navBtnHandler}></div>
            )}
        </nav>
    );
};

export default NavBar;

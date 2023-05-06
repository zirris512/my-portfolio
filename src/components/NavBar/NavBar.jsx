import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

import Logo from "/assets/brent-logo.png";
import styles from "./NavBar.module.scss";

const NavBar = () => {
	const [navOpen, setNavOpen] = useState(false);

	const navBtnHandler = (e) => {
		if (window.innerWidth <= 1200) {
			setNavOpen((val) => !val);
		}
	};

	return (
		<nav className={styles.nav}>
			<div className={styles.navHeader}>
				<a href="#" onClick={() => setNavOpen(false)}>
					<img src={Logo} alt="logo" className={styles.navHeaderLinkImg} />
				</a>
			</div>
			<div className={`${styles.navList} ${!navOpen && styles.active}`}>
				<ul className={styles.navListItems}>
					<li>
						<a href="#" className={styles.navListItemLink} onClick={navBtnHandler}>
							Home
						</a>
					</li>
					<li>
						<a href="#about" className={styles.navListItemLink} onClick={navBtnHandler}>
							About
						</a>
					</li>
					<li>
						<a href="#skills" className={styles.navListItemLink} onClick={navBtnHandler}>
							Skills
						</a>
					</li>
					<li>
						<a href="#projects" className={styles.navListItemLink} onClick={navBtnHandler}>
							Projects
						</a>
					</li>
					<li>
						<a href="#contact" className={styles.navListItemLink} onClick={navBtnHandler}>
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
				{!navOpen ? <FontAwesomeIcon icon={faBars} /> : <FontAwesomeIcon icon={faTimes} />}
			</button>
			{navOpen && <div className={styles.backdrop} onClick={navBtnHandler}></div>}
		</nav>
	);
};

export default NavBar;

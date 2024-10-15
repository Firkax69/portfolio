// need to import personla front photo;
import styles from './Hero.module.css';
import email from '../assets/email-outline.svg';
import headshot from "../assets/IMG_0725.JPG";
import { Link } from 'react-router-dom';

const Tagline = () => {
    return (
        <div className={styles["tagline-container"]}>
            <hr />
            <h1>Adaptable,resilent and passionate about overcoming complex challenges.</h1>
            <p>
                Deeply invested in the life-long learning mentality, 
                and I'm on my way to become a full-stack developer.
                My focus is in creating responsive layouts on the JavaScript 
                stack of React and NodeJS, and from my background as an mechanical design engineer 
                I'm well acquainted to bringing out solutions to complex problems.
            </p>
        </div>
    )
}

const Headshot = () => {
    return (
        <div className={styles["headshot-container"]}>
            <img className={styles.headshot} src={headshot} alt="Headshot of Ihor Kovalevskyi for CV application" />
            <ul className={styles["external-links-container"]}>
                <li><a href="https://github.com/Firkax69?tab=repositories"><img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github logo" /></a></li>
                <li><a href="https://www.linkedin.com/in/kovalevskyi/"><img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn logo" /></a></li>
                <li>
                    <Link to="/contact">
                        <img className={styles.icon} src={email} alt="" />
                    </Link>
                </li>
            </ul>
        </div>
    )
}

const Hero = () => {
    return (
        <>
            <div className={styles.hero}>
                <Tagline/>
                <Headshot/>
            </div>
        </>
    )
}

export default Hero;
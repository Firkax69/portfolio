// need to import personla front photo;
import styles from './Hero.module.css';
import email from '../assets/email-outline.svg';

const Tagline = () => {
    return (
        <div className={styles["tagline-container"]}>
            <hr />
            <h1>Adaptable,resilent and passionate about overcoming complex challenges.</h1>
            <p>I am Ihor, a fomer Logistics Operations Managet and double glazing Contract manager. Currently buidling a new career as a webdeveloper. I have got full-stack web development skills with a passion for the complexities of backend design.</p>
        </div>
    )
}

const Headshot = () => {
    return (
        <div className={styles["headshot-container"]}>
            {/* need to add src and alt*/}
            <img className={styles.headshot} src='' alt="" />
            <ul className={styles["external-links-container"]}>
                <li><a href="https://github.com/sourdoughbredd"><img className={styles} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="Github logo" /></a></li>
                <li><a href="https://www.linkedin.com/in/kovalevskyi/"><img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn logo" /></a></li>
                <li><a href=""><img className={styles.icon} src={email} alt="" /></a></li>
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
import { Link } from "react-router-dom";
import headshot2 from "../assets/IMG_3129.jpg"
import styles from "./Connect.module.css";

const Links = () => {
    return (
        <div className={styles["links"]} >
            <a href="https://www.linkedin.com/in/kovalevskyi/">
                <img  className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="LinkedIn logo" />
                <span>LinkedIn</span>
            </a>

            <a href="https://github.com/Firkax69?tab=repositories" className={styles["github"]}>
                <img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github logo" />
                <span>Github</span>
            </a>

            <div className={styles["github"]}></div>
        </div>
    )
}

const Connect = () => {
    return (
        <div className={styles["connect-section"]}>
            <h2 className="section-title">Let's Connect</h2>
            <div className={styles["content-container"]}>
                <div className={styles["text-container"]}>
                    <p>Have project in mind? let's get in touch. Feel free to contact to get some advice or to chat about coding or engineering.</p>
                    <p>
                        <Link to="/contact" className={styles["contact-link"]}>
                            Send me an email
                        </Link>

                        {" "}or connect with me elsewhere on the web...
                    </p>

                    <Links />
                </div>

                <img className={styles["headshot"]} src={headshot2} alt="" />
            </div>
        </div>
    )
}

export default Connect;
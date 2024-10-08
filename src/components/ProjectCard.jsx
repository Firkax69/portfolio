import styles from "./ProjectCard.module.css";
import { Link } from "react-router-dom";
// import ProjectLinks from "./ProjectLinks";

const Buttons = ({ live_link, repo_link }) => {
    return (
        <div className={styles.buttons}>
            <a href={live_link}>Live Preview</a>
            <a href={repo_link}>Github Repo</a>
        </div>
    )
}

const ProjectCard = ({
    title,
    description_short,
    description_long,
    features,
    img,
    tech,
    repo_link,
    live_link,
    name,
}) => {
    return (
        <div className={`${styles.project} ${styles[name]}`} name={name}>
            <div className={styles["project-content-container"]}>
                <img src={img} alt="Project screenshot" className={styles.screenshot} />
                <div className={styles["project-info-container"]}>
                    <h3>{title}</h3>
                    <p className={styles["description-long"]}>{description_long}</p>
                    <p className={styles["description-short"]}>{description_short}</p>
                    <h4>Features</h4>
                    <ul>
                        {features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                    
                    <div className={styles["bottom-align"]}>
                        <div className={styles["tech-stack-container"]}>
                            <h4>Tech Stack</h4>
                            <span>
                                {tech.reduce((acc, curr, idx) => {
                                return acc + " " + curr + (idx < tech.length - 1 ? "," : "");
                                }, "")}
                            </span>
                        </div>

                        <Buttons {...{live_link, repo_link}}/>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProjectCard;
import styles from "./Showcase.module.css";
import projects from "../data/projects.js";

const Project = ({
    title,
    description,
    features,
    img,
    tech,
    repo_link,
    live_link,
}) => {
    return (
        <div className={styles.project}>
            <div className={styles["project-content-container"]}>
                <img src={img} alt="" className={styles.screenshot} />
                <div className={styles["project-info-container"]}>
                    <h3>{title}</h3>
                    <p>{description}</p>
                    <h4>Features</h4>
                    <ul>
                        {features.map((feature) => (
                            <li key={feature}>{feature}</li>
                        ))}
                    </ul>
                    <h4>Tech Stack</h4>

                    {/* ????? working ????? */}
                    <span>
                        {tech.reduce((acc, curr, idx) => {
                            return acc + " " + curr + (idx < tech.length - 1 ? "," : "");
                        })}
                    </span>

                    <div className={styles.buttons}>
                        <a href={live_link}>Live Preview</a>
                        <a href={repo_link}>Github Repo</a>
                    </div>

                </div>
            </div>
        </div>
    )
};

const Showcase = () => {
    return (
        <div className={styles["showcase-container"]}>
            <h2>Featured Projects</h2>
            <div className={styles["projects-container"]}>
                {projects.map((project) => {
                    return <Project key={project.title} {...project} />
                })}
            </div>
        </div>
    )
}

export default Showcase;
import { useParams } from "react-router-dom";
import projects from "../data/projects";
import ProjectLinks from "../components/ProjectLinks";
import styles from "./ProjectDetails.module.css";

const ProjectDetails = () => {
    //  ????????? this two lines
    const {projectName} = useParams();
    const project = projects.find((proj) => proj.name === projectName);

    return (
        <div className={styles["project-content-container"]}>
            <div className={styles["project-info-container"]}>
                <div className={styles["header-group"]}>
                    <span>Project Details</span>
                    <h3 className={styles.title}>{project.title}</h3>
                </div>

                <p className={styles["description-long"]}>{project.description_long}</p>
                <img src={project.img} alt="" className={styles.screenshot}/>
                <h4 className={styles["features-header"]}>Features</h4>
                <ul className={styles["features-list"]}>
                    {project.features.map((feature) => (
                        <li key={feature}>{feature}</li>
                    ))}
                </ul>
                <div className={styles["tech-stack-container"]}>
                    <h4>Tech Stack</h4>
                    <span>
                        {projects.tech.reduce((acc, curr, idx) => {
                            return (
                                acc + " " + curr + (idx < project.tech.length - 1 ? "," : "")
                            )
                        }, "")}
                    </span>
                </div>

                <ProjectLinks {...project}/>
            </div>
        </div>
    )
}

export default ProjectDetails;
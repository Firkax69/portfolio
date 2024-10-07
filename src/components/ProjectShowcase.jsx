import styles from "./ProjectShowcase.module.css";
import ProjectCard from "./ProjectCard.jsx";
import { featuredProjects } from "../data/projects.js";

const ProjectShowcase = ({sectionTitle, projects}) => {
    return (
        <div className={styles["section-container"]}>
            <h2>{sectionTitle}</h2>
            <div className={styles["projects-container"]}>
                {featuredProjects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectShowcase;
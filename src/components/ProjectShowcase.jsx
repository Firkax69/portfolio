import styles from "./ProjectShowcase.module.css";
import ProjectCard from "./ProjectCard.jsx";

const ProjectShowcase = ({sectionTitle, projects}) => {
    return (
        <div className={styles["section-container"]}>
            <h2 className="section-title">{sectionTitle}</h2>
            <div className={styles["projects-container"]}>
                {projects.map((project) => (
                    <ProjectCard key={project.title} {...project} />
                ))}
            </div>
        </div>
    )
}

export default ProjectShowcase;
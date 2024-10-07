import styles from "./FeaturedProjects.module.css";
import ProjectCard from "./ProjectCard.jsx";
import {featuredProjects} from "../data/projects.js"

const FeaturedProjects = () => {
    return (
        <div className={styles["section-container"]}>
            <h2>Featured Projects</h2>
            <div className={styles["projects-container"]}>
                {featuredProjects.map((project) => {
                    return <ProjectCard key={project.title} {...project} />
                })}
            </div>

            <div className={styles["see-more"]}>
                <span>
                    <a href="/projects">Click here to see more projects</a>
                </span>
            </div>
        </div>
    )
}

export default FeaturedProjects;
import ProjectShowcase from "../components/ProjectShowcase";
import { Link } from "react-router-dom";

import projectsData from "../data/projects.js"
const {featuredProjects, projects} = projectsData;

import styles from "./Projects.module.css";
import { ul } from "framer-motion/client";

const notFeaturedProjects = projects.filter((project) => 
    !project.featured);

const Banner = () => {
    return (
        <div className={styles["banner"]}>
            <h1>Projects</h1>
            <h2>Here's some of the work I've done so far.</h2>
        </div>
    );
};

const TableOfContents = ({projects}) => {

    const ProjectList = ({projects}) => (
        <ul>
            {projects.map((project) => (
                <li key={project.name}>
                    <Link to={project.name} smooth={true} duration={500} offset={-30}>
                        {project.title}
                    </Link>
                </li>
            ))}
        </ul>
    );

    return (
        <div className={styles["table-of-contents"]}>
            <h3>Table of Contents</h3>
            <div className={styles["toc-container"]}>
                <div className={styles["toc-column"]}>
                    <h4 style={{textAlign: "center"}}>Web</h4>
                    <ProjectList
                        {...{
                            projects:projects,
                        }}
                    />
                </div>

            </div>
        </div>
    )
}

const Projects = () => {
    const orderedProjects = [...featuredProjects, notFeaturedProjects];

    return (
        <>
            <Banner/>
            <hr />
            <TableOfContents projects={orderedProjects}/>
            <hr />
            <ProjectShowcase sectionTitle="Pinned" projects={featuredProjects}/>
            <hr />
            <ProjectShowcase sectionTitle="Recent" projects={notFeaturedProjects}/>
            <hr />
        </>
    )
}

export default Projects;
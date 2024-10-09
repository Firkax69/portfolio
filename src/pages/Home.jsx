import Hero from "../components/Hero";
import About from "../components/About";
import Skills from "../components/Skills";
import ProjectShowcase from "../components/ProjectShowcase";

import { Link } from "react-router-dom";
import styles from "./Home.module.css";

import projectsData from "../data/projects.js";
const {featuredProjects} = projectsData;

const Home = () => {
    return (
        <>
            <Hero/>
            <hr />
            <About/>
            <hr />
            <Skills/>
            <hr />
            <ProjectShowcase
                sectionTitle="Featured Projects"
                projects={featuredProjects}
            />
            <div className={styles["see-more"]}>
                <Link to="/projects">Click here to see more projects.</Link>
            </div>
            <hr />
        </>
    )
}

export default Home;
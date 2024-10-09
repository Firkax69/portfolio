import { div } from "framer-motion/client";
import styles from "./ProjectLinks.module.css";

const ProjectLinks = ({live_link, repo_link}) => {
    return (
        <div className="styles.buttons">
            <a href={live_link}>Live Preview</a>
            <a href={repo_link}>Github Repo</a>
        </div>
    );
    
}

export default ProjectLinks;
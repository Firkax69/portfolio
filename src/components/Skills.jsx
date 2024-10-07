import styles from "./Skills.module.css";

import htmlIcon from "../assets/icons/html-icon.svg";
import cssIcon from "../assets/icons/css-icon.svg";
import jsIcon from "../assets/icons/javascript-icon.svg";
import reactIcon from "../assets/icons/react-icon.svg";
import cssModulesIcon from "../assets/icons/css-modules-icon.png";
import nodeIcon2 from "../assets/icons/node-icon2.svg";
import expressIcon from "../assets/icons/express-icon.svg";
import databaseIcon from "../assets/icons/database-icon.svg";
import gitIcon from "../assets/icons/git-icon.svg";
import githubIcon from "../assets/icons/github-icon.svg";
import webpackIcon from "../assets/icons/webpack-icon.svg";

const skillGroups = [
    {
        title: "Programming Languages",
        classname: "languages",
        skills: [
            {str: "HTML", img: htmlIcon, invert_img: false},
            {str: "CSS", img: cssIcon, invert_img: false},
            {str: "JavaScript", img: jsIcon, invert_img: false},
        ],
    },

    {
        title: "Frontend",
        classname: "frontend",
        skills: [
            {str: "HTML", img: htmlIcon, invert_img: false},
            {str: "CSS", img: cssIcon, invert_img: false},
            {str: "JavaScript", img: jsIcon, invert_img: false},
            {str: "React", img: reactIcon, invert_img: false },
            {str: "CSS Modules", img: cssModulesIcon, invert_img: false },
        ],
    },

    {
        title: "Backend",
        classname: "backend",
        skills: [
            {str: "NodeJS", img: nodeIcon2, invert_img: false},
            {str: "Express", img: expressIcon, invert_img: true},
        ],
    },

    {
        title: "Database",
        classname: "database",
        skills: [
            {str: "SQL", img: databaseIcon, invert_img: true},
            {str: "Express", img: expressIcon, invert_img: true},
        ],
    },

    {
        title: "DevOps & Tools",
        classname: "devops",
        skills: [
            {str: "Git", img: gitIcon, invert_img: false},
            {str: "Github", img: githubIcon, invert_img: true},
            {str: "Webpack", img: webpackIcon, invert_img: false},
        ],
    }
];

const Skill = ({str, img, invert_img}) => {
    const invertClass = invert_img ? "invert" : "";

    return (
        <div className={styles["skill-container"]}>
            <img src={img} className={styles[invertClass]} alt={`${str} icon`} />
            <span>{str}</span>
        </div>
    );
};

const SkillGroup = ({title, classname, skills}) => {
    return (
        <div className={`${styles.skillgroup} ${styles[classname]}`}>
            <div className={styles["skillgroup-info"]}>
                <h3>{title}</h3>
                <div className={styles["skillgroup-grid-container"]}>
                    <div className={styles["skillgroup-grid"]}>
                        {skills.map((skill) => {
                            return <Skill key={skill.str} {...skill} />
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
};

const Skills = () => {
    return (
        <div className={styles["skills-section-container"]}>
            <h2 className="section-title">Software Skills</h2>
            <div className={styles["skillgroup-container"]}>
                {/* {skillGroups.map((group) => {
                    return <SkillGroup key={group.title} {...group} />
                })} */}

                <div className={`${styles["skillgroups-row"]}`}>
                    <SkillGroup {...skillGroups[0]} />
                </div>
                <div className={`${styles["skillgroups-row"]}`}>
                    <SkillGroup {...skillGroups[1]} />
                    <SkillGroup {...skillGroups[2]} />
                </div>
                <div className={`${styles["skillgroups-row"]}`}>
                    <SkillGroup {...skillGroups[3]} />
                    <SkillGroup {...skillGroups[4]} />
                </div>
            </div>
        </div>
    )
}

export default Skills;
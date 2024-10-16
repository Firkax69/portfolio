import styles from "./About.module.css";

const About = () => {
    return (
        <div className={styles["about-me-container"]}>
            <h2 className="section-title">About Me</h2>
            <div className={styles.paragraphs}>
                <div>
                    <p>
                        I am Ihor, a fomer Logistics Operations Manager and double 
                        glazing Contract Manager. Currently buidling a new career as 
                        a webdeveloper. I have got full-stack web development skills 
                        with a passion for the complexities of backend design.
                    </p>
                    <p>
                        Over the past years, I've gained a wealth of experience across
                        various fields, including a short carrer as Design Engineer in Camozzin in Kyiv,
                        earning an M.S. in Mechanical Engineering from Igor Sikorsky Kyiv Polytechnic Institute,
                        and having almost 3 years of logistics industry expertise and working for 2 years in aluminium glazing industry.
                        Through these diverse experiences, I developed a profound passion for coding, which led me to fully
                        commit to a career in software development.
                    </p>
                </div>

                <div>
                    <p>
                        {/* Maybe change to other paragraph??? */}
                        As a full-stack developer, I am passionate about creating robust,
                        user-friendly applications with well-organized code. I excel in
                        technical presentation and communication, ensuring that complex
                        ideas are effectively conveyed to the targeted audience.
                        I am committed to excellence in every aspect of my work.
                    </p>
                    <p>I'm always excited to take on new challenges and collaborate with
                      others who share my passion for technology. Let's connect and make
                      something amazing together!
                    </p>
                 </div>
            </div>
        </div>
    )
}

export default About;
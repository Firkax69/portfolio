import styles from ".About.module.css";

const About = () => {
    return (
        <div className={styles["about-me-container"]}>
            <h2>About Me</h2>
            <div className={styles.paragraphs}>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus magnam quos molestiae officiis sit, modi tempore illum distinctio et nemo.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga amet aperiam molestiae accusamus ducimus at provident? Ipsam porro quis molestias cumque ratione!</p>
                </div>

                <div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam quidem officiis ut, commodi recusandae ipsa architecto consectetur eligendi eum, praesentium amet dolores sapiente exercitationem eveniet aperiam molestias voluptatibus natus placeat sint, corrupti sequi!</p>
                 </div>
            </div>
        </div>
    )
}

export default About;
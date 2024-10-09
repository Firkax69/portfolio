import React, {useRef, forwardRef} from "react";
import {useForm, ValidationError} from "@formspree/react";
import { Link } from "react-router-dom";
import styles from "./Contact.module.css";
import headshot from "../assets/IMG_0725.JPG";
import email from "../assets/email-outline.svg";

const ContactForm = forwardRef((props, ref) => {
    const [state, handleSubmit] = useForm("mjvnnqav");

    if (state.succeeded) {
        return <p>Thank you fro your message! I will get back to you shortly.</p>
    }

    return (
        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                id = "email"
                name="email" 
                placeholder="Your Email"
                ref={ref}
            />

            <ValidationError
                prefix="Email"
                field="email"
                erorrs={state.errors}
                className={styles.myclass}
            />

            <textarea 
                name="message" 
                id="message"
                rows={10}
                placeholder="Your message"
            />

            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />

            <button type="submit" disabled={state.submitting}>
                Submit
            </button>
        </form>
    )
})

const Headshot = ({focusEmailInput}) => {
    return (
        <div className={styles["headshot-group"]}>
            <img 
                className={styles.headshot}
                src={headshot} 
                alt="Headshot of Ihor Kovalevskyi on the coast of amazing Puerto de la Cruz" 
            />

            <ul className={styles["external-links-container"]}>
                <li>
                    <a href="https://github.com/Firkax69?tab=repositories">
                        <img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg" alt="github logo" />
                    </a>
                </li>

                <li>
                    <a href="https://www.linkedin.com/in/kovalevskyi/">
                        <img className={styles.icon} src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/linkedin/linkedin-plain.svg" alt="inkedIn logo" />
                    </a>
                </li>

                <li>
                    <Link to="/contact" onClick={focusEmailInput}>
                        <img 
                            className={styles.icon} 
                            src={email}
                            alt="Email icon"
                        />
                    </Link>
                </li>
            </ul>
        </div>
    )
};

const Contact = () => {
    const emailInputRef = useRef(null);

    const focusEmailInput = () => {
        if (emailInputRef.current) {
            emailInputRef.current.focus();
        }
    }

    return (
        <div className={styles.container}>
            <h1>Get in touch</h1>
            <div className={styles.content}>
                <Headshot focusEmailInput={focusEmailInput} />
                <ContactForm ref={emailInputRef}/>
            </div>
        </div>
    )
}

export default Contact;
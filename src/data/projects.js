import CVgenerator from "../data/CVgeneratorScreenshot.png";
import ToDoList from "../data/ToDo-list-screen.png";

const projects = [
    {
        title: "To-Do List",
        description: 
            "The To-Do List application allows users to manage their tasks efficiently. Users can add, edit, delete, and organize tasks into different projects. The application is built completely with vanilla HTML/CSS/JS and utilizes Webpack for module bundling.",
        features: [
            "Add Tasks",
            "Edit Tasks",
            "Delete Tasks",
        ],
        tech: ["HTML", "CSS", "Javascript"],
        img: ToDoList,
        repo_link: "",
        live_link: "",
    },

    {
        title: "Resumé Builder",
        description: 
            "The Resume Builder application allows users to create and customize their resumes through a user-friendly interface. This project showcases advanced React techniques, state management, form handling, and integration with Vite for a seamless development experience.",
        features: [
            "Real-Time Preview",
            "Dynamic Form Handling",
        ],
        tech: ["HTML/CSS/JS", "React", "CSS Modules"],
        img: CVgenerator,
        repo_link: "",
        live_link: "",
    },


];

export default projects;
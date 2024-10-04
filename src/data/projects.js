import CVgenerator from "../data/CVgeneratorScreenshot.png";
import ToDoList from "../data/ToDo-list-screen.png";4
import MessageBoard from "../data/MessageBoard-screenshots.png"
import WeatherApp from "../data/weatherApp-screen.png"

const projects = [
    {
        title: "To-Do List",
        description: 
            "The To-Do List application allows users to manage their tasks efficiently. Users can add, edit, delete, and organize tasks into different projects. The application is built completely with vanilla HTML/CSS/JS and utilizes Webpack for module bundling.",
        features: [
            "Add Tasks: Users can add new tasks with a description.",
            "Edit Tasks: Tasks can be edited to update their details.",
            "Delete Tasks: Users can delete tasks that are no longer needed, also separate button to delete only completed tasks",
            "Complete Tasks: Tasks can be marked as completed with according visual effect"
        ],
        tech: ["HTML", "CSS", "Javascript"],
        img: ToDoList,
        repo_link: "https://github.com/Firkax69/todo-list-project",
        live_link: "https://firkax69.github.io/todo-list-project/",
    },

    {
        title: "Resumé Builder",
        description: 
            "The Resume Builder application allows users to create and customize their resumes through a user-friendly interface. This project showcases advanced React techniques, state management, form handling, and integration with Vite for a seamless development experience.",
        features: [
            "Real-Time Preview: Utilized React's component lifecycle to provide instant feedback on resume changes.",
            "Dynamic Form Handling: Implemented using React's state and effect hooks to manage form data and real-time updates using prop hoisting/drilling (before I learned about Context API).",
            "Styling with CSS Modules: Ensured modular and scoped styling using CSS modules.",
        ],
        tech: ["HTML/CSS/JS", "React", "CSS Modules"],
        img: CVgenerator,
        repo_link: "https://github.com/Firkax69/cv-app-odin", 
        live_link: "https://cv-form-kovalevskyi.netlify.app/",
    },


];

export default projects;
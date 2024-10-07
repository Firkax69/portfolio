import CVgenerator from "../data/CVgeneratorScreenshot.png";
import ToDoList from "../data/ToDo-list-screen.png";
import MessageBoard from "../data/MessageBoard-screenshots.png";
import WeatherApp from "../data/weatherApp-screen.png";

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
        featured: true,
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
        featured: true,
    },

    {
        title: "Weather API App",
        description: "Weather app that uses the OpenWeatherMap API. A JavaScript project from the Odin Project Curriculum.",
        features: [
            "API Integration: Implemented the OpenWeatherMap API for dynamic weather data retrieval",
            "Responsive Location Search: Developed a user-friendly interface to search for specific weather conditions by location",
            "Asynchronous Programming: Utilized promises and async/await to manage API calls and improve code efficiency.",
        ],
        tech: ["HTML/CSS/JS", "Webpack", "OpenWeatherMap API"],
        img: WeatherApp,
        repo_link: "https://github.com/Firkax69/weather-app", 
        live_link: "https://firkax69.github.io/weather-app/",
        featured: true,
    },

    {
        title: "Message Board",
        description: "The Message Board allows users to create, open and read new messages. The project was build using simple Express, NodeJS and JavsScript",
        features: [
            "Web Application Development: Built an interactive message board using Node.js and Express for server-side functionality.",
            "Template Engine Integration: Implemented EJS for dynamic HTML rendering, enhancing the user interface.",
            "Middleware Utilization: Configured Express middleware (express.urlencoded) to parse incoming form data effectively.",
        ],
        tech: ["JavaScript", "Express", "NodeJS"],
        img: MessageBoard,
        repo_link: "https://github.com/Firkax69/node-message-odin", 
        live_link: "https://parallel-buzzard-ihorkovalevskyi-97c43156.koyeb.app/",
        featured: true,
    },

    // {
    //     title: ,
    //     description: 
    //         ,
    //     features: [
            
    //     ],
    //     tech: [],
    //     img: ,
    //     repo_link: , 
    //     live_link: ,
    // },

    // Need to add a few more projects, screens already added for WEather API and MessageBoard;
];

const featuredProjects = projects.filter((project) => project.featured);

export default {projects, featuredProjects};
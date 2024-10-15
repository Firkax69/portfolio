import CVgenerator from "../data/CVgeneratorScreenshot.png";
import ToDoList from "../data/ToDo-list-screen.png";
import MessageBoard from "../data/code-screen-message-node.png";
import WeatherApp from "../data/weatherApp-screen.png";
import Calculator from "../data/calc-screen.png";
import TicTacToe from "../data/tictac-screen.png";

const projects = [
    {
        title: "To-Do List",
        description_short: "A simple frontend task tracking app built with vanilla HTML/CSS/JS.",
        description_long: 
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
        name: "to-do-list",
    },

    {
        title: "Resumé Builder",
        description_short: "A React app for automatically building a resume from form inputs",
        description_long: 
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
        name: "resume-builder",
    },

    {
        title: "Weather API App",
        description_short: "Simple weather app using API and webpack",
        description_long: "Weather app that uses the OpenWeatherMap API. A JavaScript project from the Odin Project Curriculum.",
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
        name: "weather-api",
    },

    {
        title: "Message Board",
        description_short: "A comprehensive NodeJS + Express beckend for managing a message board",
        description_long: "The Message Board allows users to create, open and read new messages. The project was build using simple Express, NodeJS and JavsScript",
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
        name: "message-board",
    },

    {
        title: "Calculator JS",
        description_short: "Simple calculator app built on plain JavaScript",
        description_long: "An online calculator with basic arithmetic operations built using HTML5, CSS3 and JS ES6 features. It can be controlled by a mouse only",
        features: [
            "All basic operations are supported (divide, multiple, add, subtract)",
            "Only mouse input supported",
            "Comes with options to clear/delete a single input OR clear the whole display",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        img: Calculator,
        featured: true,
        repo_link: "https://github.com/Firkax69/odin-calculator-2", 
        live_link: "https://firkax69.github.io/odin-calculator-2/",
        name: "calculator-js",
    },

    {
        title: "Tic-Tac-Toe JS",
        description_short: "Classical Tic-Tac-Toe game build on simple JS",
        description_long: "One of my first featured project build using plain JavaScript. Simple, classical, mouse controlled Tic-Tac-Toe game",
        features: [
            "Play against CPU bot",
            "Play with a second person",
            "Mouse controlled game",
        ],
        tech: ["HTML", "CSS", "JavaScript"],
        img: TicTacToe,
        featured: true,
        repo_link: "https://github.com/Firkax69/project_Tic-Tac-Toe", 
        live_link: "https://firkax69.github.io/project_Tic-Tac-Toe/",
        name: "tic-tac-toe",
    },

    // {
    //     title: ,
    //     description: 
    //         ,
    //     features: [
            
    //     ],
    //     tech: [],
    //     img: ,
    // featured: false,
    //     repo_link: , 
    //     live_link: ,
    //     name: ,
    // },

    // Need to add a few more projects, screens already added for WEather API and MessageBoard;
];

const featuredProjects = projects.filter((project) => project.featured);

export default {projects, featuredProjects};
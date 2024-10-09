import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

// Import the new ProjectDetails component
import ProjectDetails from "../src/components/ProjectDetails";   
import Contact from "./pages/Contact";

const pageVariants = {
  initial: {
    opacity: 0,
    x: "+100vw",
  },
  in: {
    opacity: 1,
    x: 0,
  },
  out: {
    opacity: 0,
    x: "-100vw",
  },
};

const pageTransition = {
  type: "tween",
  ease: "easeInOut",
  duration: 0.3,
};

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header/>
      <div id="app-main-content-container">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route
              path="/"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Home/>
                </motion.div>
              }
            />

            <Route
              path="projects"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Projects/>
                </motion.div>
              }
            />

            <Route
              path="projects/:projectName"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <ProjectDetails/>
                </motion.div>
              }
            />

            <Route
              path="contact"
              element={
                <motion.div
                  initial="initial"
                  animate="in"
                  exit="out"
                  variants={pageVariants}
                  transition={pageTransition}
                >
                  <Contact/>
                </motion.div>
              }
            />
          </Routes>
        </AnimatePresence>
      </div>
    </>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<Layout/>} />
      </Routes>
    </Router>
  );
}

export default App;

// GPT this animation (dlya rozuminya)
// also take course again on motion.div and Routes in react;
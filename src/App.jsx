import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";

import Header from "./components/Header";
import Home from "./pages/Home";
import Projects from "./pages/Projects";

import ProjectDetails from "../src/pages/ProjectDetails";   
import Contact from "./pages/Contact";

const ScrollToTop = () => {
  const {pathname} = useLocation();

  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.scroll) {
        window.scrollTo(event.state.scroll.x, event.state.scroll.y);
      } else {
        window.scrollTo(0,0);
      }
    }

    window.addEventListener("popstate", handlePopState);

    return () => {
      window.removeEventListener("popstate", handlePopState);
    }
  }, []);

  useEffect(() => {
    window.scrollTo(0,0);
  }, [pathname]);

  useEffect(() => {
    const saveScrollPosition = () => {
      const scroll = {x: window.scrollX, y: window.scrollY};
      history.replaceState({...history.state, scroll}, "");
    };

    window.addEventListener("beforeunload", saveScrollPosition);

    return () => {
      window.removeEventListener("beforeunload", saveScrollPosition);
    }
  }, [])

  return null;
}

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header/>
      <div id="app-main-content-container">

        <ScrollToTop/>

        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home/>} />

          <Route path="projects" element={<Projects/>} />

          <Route path="projects/:projectName" element={<ProjectDetails/>} />
        
          <Route path="contact" element={<Contact/>} />
        </Routes>
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
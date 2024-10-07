import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import './index.css'
import Hero from './components/Hero.jsx';
import ProjectShowcase from './components/ProjectShowcase.jsx';
import About from "./components/About.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <App/> */}
    {/* <Header/> */}
    {/* <About/> */}
    {/* <Hero/> */}
    {/* <Skills/> */}
    <ProjectShowcase/>

  </StrictMode>,
)

// Fill relevant info and change icons to better ones.
// Project.js which contain our project will need to be looked at when doployed, to amend and fill additional data.
// Project.js photo doesn't appear and cover in full , need to be fixed;

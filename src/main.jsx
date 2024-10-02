import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import Header from './components/Header.jsx';
import Skills from './components/Skills.jsx';
import './index.css'
import Hero from './components/Hero.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    {/* <Header/> */}
    <Hero/>
    {/* <Skills/> */}
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import React from 'react';
import App from './App.jsx'
import Header from './components/Header.jsx';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App/>
    <Header/>
  </StrictMode>,
)

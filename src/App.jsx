import React from "react";
import Home from "./pages/Home";
import Contact from "./pages/Contact.jsx";
import Skills from "./components/Skills.jsx";
import Experience from "./components/Experience.jsx";
import Projects from "./components/Projects.jsx";
import {Routes, Route } from "react-router-dom";

export default function App() {
  return (
    
    <>
    <Routes>
      <Route path="/" element={ <Home /> } />
      <Route path="/skills" element={<Skills />} />
      <Route path="/experience" element={<Experience />} />
      <Route path="projects" element={<Projects />} />
      <Route path="/contact" element={<Contact/>} />
     
          
    </Routes>
   
    </>
  )
}
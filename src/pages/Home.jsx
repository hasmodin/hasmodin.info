import React from "react";
import Hero from "../components/Hero.jsx";
import Skills from "../components/Skills.jsx";
import Projects from "../components/Projects.jsx";
import Contact from "../pages/Contact.jsx";
import Experience from "../components/Experience.jsx";


export default function Home() {
  return (
    <div id="home">
      <Hero />
      <Skills />
      <Experience />
      <Projects />
      <Contact />
    
    </div>
  );
}

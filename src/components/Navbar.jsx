import React from "react";

import { Download } from "lucide-react";
import Experience from "./Experience";
import Projects from "./Projects";
import Skills from "./Skills";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import { Link } from "react-scroll";
export default function Navbar() {
  return (
    <nav className="w-full bg-gradient-to-b from-blue-50 to-white border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-gray-900">
              Hasmodin Ansari
            </span>
            <span className="hidden sm:block text-sm text-gray-600">
              / Developer
            </span>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="home" smooth={true} duration={300} offset={-100}>
              {" "}
              <a
                href="/"
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                <span className="relative inline-block hover:bg-slate-300 py-0.5 px-1 rounded">
                  Home
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full hover:w-full" />
                </span>
              </a>
            </Link>

            <Link to="skills" smooth={true} duration={300}>
              <a
                href="#"
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                <span className="relative inline-block hover:bg-slate-300 py-0.5 px-1 rounded">
                  Skills
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full hover:w-full" />
                </span>
              </a>
            </Link>

            <Link to="experience" smooth={true} duration={300}>
              <a
                href="#experience"
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                <span className="relative inline-block hover:bg-slate-300 py-0.5 px-1 rounded">
                  Experience
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full hover:w-full" />
                </span>
              </a>
            </Link>

            <Link to="projects" smooth={true} duration={300}>
              <a
                href="#projects"
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                <span className="relative inline-block hover:bg-slate-300 py-0.5 px-1 rounded">
                  Projects
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full hover:w-full" />
                </span>
              </a>
            </Link>

            <Link to="contact" smooth={true} duration={300}>
              <a
                href="#"
                className="relative text-gray-600 hover:text-gray-900 transition-colors duration-200 py-2"
              >
                <span className="relative inline-block hover:bg-slate-300 py-0.5 px-1 rounded">
                  Contact
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-600 transition-all duration-200 group-hover:w-full hover:w-full" />
                </span>
              </a>
            </Link>
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1PHMm-gIn47HygFDygfp8dJnNO5LaIqoG/view?usp=drive_link",
                  "_blank"
                )
              }
              className="cursor-pointer flex gap-1 items-center px-4 py-2 text-sm font-medium text-white bg-blue-600 rounded-md transition-all duration-200 hover:bg-blue-700 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              <span>
                <Download />
              </span>
              Resume
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

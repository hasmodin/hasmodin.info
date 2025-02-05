
import React from "react";
import projects from "../assets/assets.js"
import {Github, ExternalLink} from "lucide-react";

export default function Projects() {
    return (
        <section id="projects" className="bg-gradient-to-bl from-white via-blue-50 to-white py-20">
        <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
          <h2 className="text-3xl font-bold text-center text-gray-900">
            Career Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-xl transition-shadow"
              >
                <div className="h-48 bg-gray-100">
                  <img
                    src={project.image}
                    alt="Project preview"
                    
                    className="w-full h-full object-cover image-rendering-auto"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                     {project.title}
                  </h3>
                  <p className="mt-2 text-gray-600">
                   {project.description}
                  </p>
                  {/* <div className="mt-4 flex space-x-4">
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <Github size={18} onClick={() => window.open("https://github.com/hasmodin/Weather-App", "_blank")} />
                      <span onClick={() => window.open("https://github.com/hasmodin/Weather-App", "_blank")}>Code</span>
                    </a>
                    <a
                      href="#"
                      className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors"
                    >
                      <ExternalLink size={18} onClick={() => window.open("https://github.com/hasmodin/Weather-App", "_blank")} />
                      <span onClick={() => window.open("https://github.com/hasmodin/Weather-App", "_blank")}>Live Demo</span>
                    </a>
                  </div> */}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
import React from "react";
import {Briefcase} from "lucide-react";
import { motion } from "framer-motion";
export default function Experience() {
    return (
        <section id="experience" className="bg-gradient-to-tr from-purple-50 via-white to-blue-50 py-20">
        <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
          <motion.h2 className="text-3xl font-bold text-center text-gray-900"
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1.5}}
          >
            Experience
          </motion.h2>
          <div className="md:flex md:flex-row md:justify-between flex-col ">
            <div className="relative pl-8 border-l-2 border-blue-600">
              <div className="absolute w-4 h-4 bg-blue-600 rounded-full -left-[9px] top-1.5"></div>
              <div className="mb-8">
                <div className="flex items-center space-x-2 mb-1">
                  <Briefcase size={16} className="text-blue-600" />
                  <h3 className="text-xl font-semibold text-gray-900">
                    MERN Stack Developer
                  </h3>
                </div>
                <p className="text-blue-600 font-medium">
                  Katara Cultural Village, Doha • 2013 - Present
                </p>
                <p className="mt-2 text-gray-600">
                  <a className="text-2xl" href="https://althanitree.net/1">althanitree.net</a><br />
                  Key responsibilities :-
                 
                </p>
                <ul>
                    <li>- Design and develop  APIs.</li>
                    <li>- Database design and Management.</li>
                    <li>- Handling server side  logic.</li>
                    <li>- Implemented MVC design pattern.</li>
                    <li>- Authentication and Authorization.</li>
                    <li>- Server side login and Performance optimization</li>
                    <li>- Deployment and Maintenance</li>
                  </ul>
                  <p className="text-xl">Media-Info Digital Library System</p>
                  <p>Key responsibilities :-</p>
                  <ul>
                    <li>- Test all application features and provide a detailed report to the vendor.</li>
                    <li>- Explain features and functionality to end users, if necessary, in a clear and concise manner.</li>
                    <li>- Report bugs to the client, including all relevant information for debugging.</li>
                    <li>- Discuss potential improvements to the application with users, gathering their feedback.</li>
                    <li>- Assist users in resetting their username and password if they forget them.</li>
                    <li>- Create new user accounts as required.</li>
                  </ul>
              </div>
            </div>
              </div>
            </div>
            
         
      </section>
    )
}
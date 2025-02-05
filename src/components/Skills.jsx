import React from "react";
import { motion } from "framer-motion";
import { Code, Database, Layers, Video ,DatabaseZap} from "lucide-react";

export default function Skills() {
  return (
    <section id="skills" className="bg-gradient-to-bl from-blue-50 to-white py-20 mt-10">
        <div className="w-full max-w-6xl mx-auto px-4 space-y-8">
          <motion.h2 className="text-3xl font-bold text-center text-gray-900"
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1.5}}
          
          >

            Skills
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <motion.div className="p-6 bg-white rounded-xl shadow-sm hover:bg-slate-300  transition-shadow  ease-in-out"
              initial={{opacity:0, x: -100}}
              animate={{opacity:1, x:0}}
              transition={{duration: 0.8}}
            >
              <div className="flex items-center space-x-3">
                <Code className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">Frontend</h3>
              </div>
              <p className="mt-4 text-gray-600">
                React, Redux, Tailwind CSS, Bootstrap, HTML5, CSS
              </p>
            </motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-sm hover:bg-slate-300 transition-shadow"
            initial={{opacity:0, y: -100}}
            animate={{opacity:1, y:0}}
            transition={{duration: 0.8}}
            >
              <div className="flex items-center space-x-3">
                <Database className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">Backend</h3>
              </div>
              <p className="mt-4 text-gray-600">
                Node.js, Express.js, Mongoose
              </p>
            </ motion.div>
            <motion.div className="p-6 bg-white rounded-xl shadow-sm hover:bg-slate-300 transition-shadow"
              initial={{opacity:0, x:100}}
              animate={{opacity:1, x:0}}
              transition={{duration: 0.8}}
            >
              <div className="flex items-center space-x-3">
              
                <DatabaseZap className="text-blue-600" size={24} />
                <h3 className="text-xl font-semibold">Database</h3>
              </div>
              <p className="mt-4 text-gray-600">Mysql, MongoDB</p>
            </motion.div>
          </div>
        </div>
      </section>
  );
}

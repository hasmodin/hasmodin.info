import React from "react";
import profileImage from "../assets/profileImage.png";

import {Github, Mail, HardDriveDownload} from "lucide-react"
import { motion } from "framer-motion";
import TextEffect from "./TextEffect";


export default function Hero() {
  

  return (
    <div className="container w-full max-w-3xl mx-auto mt-10 ">
      <div className="flex flex-col gap-4">
        <motion.div className="w-32 h-32 mx-auto rounded-full overflow-hidden border-4 border-blue-600 hover:scale-105 transition-all"
        // whileHover={{
        //   scale: 1.1,
        //   boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)"
        // }}
        animate={{
          scale: [1,2,2,1],
          rotate: [0, 3600, 0],
          borderRadius: ["10%", "10%", "50%", "50%"]
        }}
        transition={{
          duration:5,
          ease: "easeInOut",
          repeat: 0,
          repeatDelay:1
        }}
        >
         
          <img 
          className="w-full h-full mx-auto object-cover "
            src={profileImage}
            alt="Profile"
          />
        </motion.div>
        <div className="mx-auto py-4 px-10">
          <motion.p  
            initial={{opacity:0, x:50}}
            animate={{opacity:1, x:0}}
            transition={{duration:1.5}}
          className="text-2xl font-bold text-center">Hasmodin Ansari</motion.p>
        <motion.p 
          initial= {{opacity:0, y:50}}
          animate={{opacity:1, y:0}}
          transition={{duration:1.5}}
        className="text-3xl text-center text-gray-500">MERN Stack Web Developer</motion.p>
        </div>
        <div>
          <TextEffect />
        </div>
        <div className="flex items-center gap-10 mt-5 mx-auto">
            <div className="flex gap-2 items-center justify-center">
                <span onClick={() => window.open("https://github.com/hasmodin?tab=repositories", "_blank")} className="cursor-pointer text-blue-500 hover:text-blue-800"><Github /></span>
                <p onClick={() => window.open("https://github.com/hasmodin?tab=repositories", "_blank")} className="cursor-pointer">GitHub</p>
            </div>
            <div className="flex gap-2 items-center justify-center">
                <span onClick={() => window.open("mailto: hasmodin@gmail.com", "_blank")} className="cursor-pointer text-blue-500 hover:text-blue-800"><Mail /></span>
                <p onClick={() => window.open("mailto: hasmodin@gmail.com", "_blank")} className="cursor-pointer">Email</p>
            </div>

            

        </div>
      </div>
    </div>
  );
}

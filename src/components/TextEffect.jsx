import React from "react";
import { motion } from "framer-motion";

export default function TextEffect(){
    const text = "Passionate web developer with 5+ years of experience in building responsive and user-friendly applications. Specialized in React.js, Node.js, Express.js, MongoDB and modern web technologies.";

    //split the text into character
    const letters = text.split("");
    return (
        <motion.p className="text-center text-gray-500 px-4 text-xl ">
            {letters.map((letter, index) => ( 
              <motion.span 
                key={index}
                initial={{opacity: 0, y:2}}
                animate={{opacity:1, y:0}}
                transition={{delay: index*0.05, duration: 0.5}}
              >
                {letter}
              </motion.span>
            )
            )}
          </motion.p>
    )
  }
import { motion } from "framer-motion";
import React from 'react'

function Motion() {
  return (
    <motion.div
        initial= {{opacity:0, y:50}}
        animate={{opacity:1, y:0}}
        transition={{duration:0.5}}
    >
        <h1>Hello, world</h1>
      
    </motion.div>
  )
}

export default Motion

"use client"

import type React from "react"
import { motion } from "framer-motion"

export const LoopDots: React.FC = () => {
  

  return (
    <div className="w-full flex items-center justify-start p-4 bg-gray-100 rounded-lg">
      <motion.div
        className="absolute w-4 h-4 border-2 border-solid border-blue-500 rounded-full"
        animate={{
            x: [0,0,90,180,270,360,450,450],
            opacity:[0,1,1,1,1,1,1,0]
        }}
        transition={{
            duration:4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 0,
        }}
        
      />
      <motion.div
        className="absolute w-4 h-4 border-2 border-solid border-blue-500 rounded-full"
        animate={{
            x: [0,0,90,180,270,360,450,450],
            opacity:[0,1,1,1,1,1,1,0]
        }}
        transition={{
            duration:4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 1,
        }}
        
      />
      <motion.div
        className="absolute w-4 h-4 border-2 border-solid border-blue-500 rounded-full"
        animate={{
            x: [0,0,90,180,270,360,450,450],
            opacity:[0,1,1,1,1,1,1,0]
        }}
        transition={{
            duration:4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 2,
        }}
        
      />
      <motion.div
        className="absolute absolute w-4 h-4 border-2 border-solid border-blue-500 rounded-full"
        animate={{
            x: [0,0,90,180,270,360,450,450],
            opacity:[0,1,1,1,1,1,1,0]
        }}
        transition={{
            duration:4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 3,
        }}
        
      />
      <motion.div
        className="absolute w-4 h-4 border-2 border-solid border-blue-500 rounded-full"
        animate={{
            x: [0,0,90,180,270,360,450,450],
            opacity:[0,1,1,1,1,1,1,0]
        }}
        transition={{
            duration:4,
            ease: "easeInOut",
            repeat: Infinity,
            delay: 4,
        }}
        
      />
    </div>
  )
}


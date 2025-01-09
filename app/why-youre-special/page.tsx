'use client'

import { motion } from 'framer-motion'

const reasons = [
  "You are the reason behind my happiness",
  "Your laughter feels like music to my ears",
  "Your love gives me strength to face any challenge",
  "You make every moment special and memorable",
  "Your presence fills my life with joy and purpose",
  "You understand me like no one else does",
]

export default function WhyYoureSpecial() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Why You're Special
      </motion.h1>
      <div className="max-w-2xl w-full space-y-4 md:space-y-6">
        {reasons.map((reason, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 }}
            className="bg-dusty-rose bg-opacity-75 rounded-lg p-4 md:p-6 shadow-lg"
          >
            <p className="text-base md:text-lg text-ivory">{reason}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


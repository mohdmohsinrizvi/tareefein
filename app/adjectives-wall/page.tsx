'use client'

import { motion } from 'framer-motion'

const adjectives = [
  "Beautiful", "Intelligent", "Compassionate", "Inspiring", "Angelic",
  "Pure", "Magical", "Elegant", "Graceful", "Radiant", "Enchanting",
  "Captivating", "Mesmerizing", "Stunning", "Alluring", "Charming"
]

export default function AdjectivesWall() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Adjectives Wall
      </motion.h1>
      <div className="max-w-4xl w-full flex flex-wrap justify-center gap-2 md:gap-4">
        {adjectives.map((adjective, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.1 }}
          >
            <span className="inline-block bg-dusty-rose bg-opacity-75 rounded-full px-3 py-1 md:px-4 md:py-2 text-ivory text-sm md:text-base font-playfair shadow-lg sparkle">
              {adjective}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


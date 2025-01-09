'use client'

import { motion } from 'framer-motion'

const compliments = [
  "You're more precious than the stars",
  "Your beauty outshines the sun",
  "Your love is the greatest gift I've ever received",
  "You're the missing piece that completes my life's puzzle",
  "Your presence makes my world brighter",
  "You're the dream I never want to wake up from",
]

export default function ComplimentGallery() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Compliment Gallery
      </motion.h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 max-w-4xl w-full">
        {compliments.map((compliment, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="bg-dusty-rose bg-opacity-75 rounded-lg p-4 md:p-6 shadow-lg flex items-center justify-center text-center h-full"
          >
            <p className="text-base md:text-lg font-playfair text-ivory">{compliment}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const traits = [
  { title: "Beauty", description: "Your smile is the sunrise that brightens my day" },
  { title: "Kindness", description: "Your compassion knows no bounds, touching everyone around you" },
  { title: "Intelligence", description: "Your wisdom and insight never cease to amaze me" },
  { title: "Inspiration", description: "You inspire me to be the best version of myself every day" },
]

export default function QueensTraits() {
  const [expandedTrait, setExpandedTrait] = useState<number | null>(null)

  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        The Queen's Traits
      </motion.h1>
      <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-4xl w-full">
        {traits.map((trait, index) => (
          <motion.div
            key={trait.title}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            className={`bg-dusty-rose bg-opacity-75 rounded-lg p-4 md:p-6 shadow-lg cursor-pointer interactive-hover ${expandedTrait === index ? 'md:col-span-2' : ''}`}
            onClick={() => setExpandedTrait(expandedTrait === index ? null : index)}
          >
            <h2 className="text-xl md:text-2xl font-playfair mb-2 md:mb-4 text-ivory">{trait.title}</h2>
            <motion.p 
              className="text-base md:text-lg text-ivory"
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: expandedTrait === index ? 1 : 0, height: expandedTrait === index ? 'auto' : 0 }}
              transition={{ duration: 0.3 }}
            >
              {trait.description}
            </motion.p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


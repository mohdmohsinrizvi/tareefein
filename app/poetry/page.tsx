'use client'

import { motion } from 'framer-motion'

const poems = [
  {
    title: "My Guiding Star",
    content: `Aradhya, you are my moonlit night,
My guiding star, my heart's delight.
With every breath, my love grows strong,
To you, my heart will always belong.`
  },
  {
    title: "Love's Embrace",
    content: `In your eyes, I see the world,
In your smile, my dreams unfurled.
Aradhya, my love so true,
My heart beats only for you.`
  },
  {
    title: "Eternal Love",
    content: `Like a river to the sea,
My love flows endlessly.
Aradhya, my soul's desire,
You set my heart on fire.`
  }
]

export default function Poetry() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Poetry for Aradhya
      </motion.h1>
      <div className="max-w-2xl w-full space-y-6 md:space-y-8">
        {poems.map((poem, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.3 }}
            className="bg-dusty-rose bg-opacity-75 rounded-lg p-4 md:p-6 shadow-lg"
          >
            <h2 className="text-xl md:text-2xl font-playfair mb-2 md:mb-4 text-ivory">{poem.title}</h2>
            <p className="text-base md:text-lg whitespace-pre-line text-ivory">{poem.content}</p>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


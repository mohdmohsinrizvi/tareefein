'use client'

import { motion } from 'framer-motion'
import { FaHeart } from 'react-icons/fa'

export default function MyMessage() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-5xl text-ivory text-center mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        My Message to Aradhya
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="bg-dusty-rose bg-opacity-75 rounded-lg p-4 md:p-8 shadow-lg max-w-2xl w-full"
      >
        <p className="text-base md:text-lg mb-4 text-ivory">
          My dearest Aradhya,
        </p>
        <p className="text-base md:text-lg mb-4 text-ivory">
          From the moment you entered my life, everything changed. You've filled my world with colors I never knew existed, and brought a joy to my heart that I never thought possible. Your love has transformed me, making me a better person with each passing day.
        </p>
        <p className="text-base md:text-lg mb-4 text-ivory">
          Every moment with you is a treasure. Your smile brightens my darkest days, your laughter is the sweetest melody, and your love is the greatest gift I could ever receive. You inspire me to dream bigger, to love deeper, and to live life to its fullest.
        </p>
        <p className="text-base md:text-lg mb-4 text-ivory">
          Thank you for being you, for loving me, and for making every day an adventure. You are my soulmate, my best friend, and the love of my life. I promise to cherish you, support you, and love you with all my heart, now and forever.
        </p>
        <p className="text-base md:text-lg mb-8 text-ivory">
          If love had a face, it would look like you, Aradhya. Thank you for being in my life and making it extraordinary.
        </p>
        <p className="text-lg md:text-xl font-playfair text-center text-ivory">
          With all my love,<br />
          Your devoted partner
        </p>
      </motion.div>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.5, type: 'spring', stiffness: 260, damping: 20 }}
      >
        <FaHeart className="text-4xl md:text-5xl lg:text-6xl text-ivory mt-8 heart" />
      </motion.div>
    </div>
  )
}


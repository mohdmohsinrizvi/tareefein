'use client'

import Link from 'next/link'
import { FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const navItems = [
  { name: "Queen's Traits", path: "/queens-traits" },
  { name: "Why You're Special", path: "/why-youre-special" },
  { name: "Compliment Gallery", path: "/compliment-gallery" },
  { name: "Poetry", path: "/poetry" },
  { name: "Adjectives Wall", path: "/adjectives-wall" },
  { name: "My Message", path: "/my-message" },
]

export default function Home() {
  return (
    <div className="romantic-bg min-h-screen flex flex-col items-center justify-center p-4 md:p-8 lg:p-16 text-center">
      <motion.h1 
        className="text-3xl md:text-4xl lg:text-6xl font-playfair text-ivory mb-8 md:mb-12 text-shadow"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        Aradhya, you are the queen of my heart and the light of my life
      </motion.h1>
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ duration: 0.5, delay: 0.5 }}
      >
        <FaHeart className="text-4xl md:text-5xl lg:text-6xl text-ivory mb-8 md:mb-12 heart" />
      </motion.div>
      <nav className="flex flex-wrap justify-center gap-4 md:gap-6">
        {navItems.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 1 }}
          >
            <Link
              href={item.path}
              className="px-4 md:px-6 py-2 md:py-3 bg-dusty-rose bg-opacity-50 rounded-full text-ivory text-sm md:text-base font-semibold hover:bg-opacity-75 transition duration-300 shadow-md hover:shadow-lg interactive-hover"
            >
              {item.name}
            </Link>
          </motion.div>
        ))}
      </nav>
    </div>
  )
}


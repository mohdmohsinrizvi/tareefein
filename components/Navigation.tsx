'use client'

import Link from 'next/link'
import { useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'

const navItems = [
  { name: "Home", path: "/" },
  { name: "Queen's Traits", path: "/queens-traits" },
  { name: "Why You're Special", path: "/why-youre-special" },
  { name: "Compliment Gallery", path: "/compliment-gallery" },
  { name: "Poetry", path: "/poetry" },
  { name: "Adjectives Wall", path: "/adjectives-wall" },
  { name: "My Message", path: "/my-message" },
]

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 right-0 bg-dusty-rose bg-opacity-75 p-4 z-10">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-ivory text-xl font-playfair">Aradhya</Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-ivory">
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul className={`md:flex ${isOpen ? 'block' : 'hidden'} absolute md:relative top-full left-0 right-0 md:top-auto bg-dusty-rose md:bg-transparent p-4 md:p-0 space-y-2 md:space-y-0 md:space-x-4`}>
          {navItems.map((item) => (
            <li key={item.name}>
              <Link 
                href={item.path} 
                className="text-ivory hover:text-dusty-rose-light transition duration-300 block md:inline"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}


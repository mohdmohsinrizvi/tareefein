'use client'

import { useState } from 'react'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/images/photo1.jpg', caption: 'Our first date at the botanical gardens' },
  { src: '/images/photo2.jpg', caption: 'Celebrating your birthday in style' },
  { src: '/images/photo3.jpg', caption: 'Our romantic getaway in Paris' },
  { src: '/images/photo4.jpg', caption: 'Cooking together on a lazy Sunday' },
  { src: '/images/photo5.jpg', caption: 'Hiking adventure in the mountains' },
  { src: '/images/photo6.jpg', caption: 'Dancing under the stars' },
]

export default function PhotoGallery() {
  const [selectedPhoto, setSelectedPhoto] = useState(null)

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-center mb-8">Our Precious Moments</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {photos.map((photo, index) => (
          <motion.div
            key={index}
            className="relative aspect-square rounded-lg overflow-hidden shadow-lg cursor-pointer"
            whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
            onClick={() => setSelectedPhoto(photo)}
          >
            <Image
              src={photo.src}
              alt={photo.caption}
              layout="fill"
              objectFit="cover"
            />
          </motion.div>
        ))}
      </div>
      <AnimatePresence>
        {selectedPhoto && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedPhoto(null)}
          >
            <div className="bg-white bg-opacity-90 p-6 rounded-lg max-w-2xl">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.caption}
                width={800}
                height={600}
                objectFit="contain"
              />
              <p className="mt-4 text-center font-playfair text-xl">{selectedPhoto.caption}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}


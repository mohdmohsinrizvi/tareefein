'use client'

import { useState } from 'react'
import { FaMusic, FaFilm, FaUtensils, FaMapMarkerAlt } from 'react-icons/fa'

const favorites = {
  songs: ['Perfect by Ed Sheeran', 'All of Me by John Legend', 'Can\'t Help Falling in Love by Elvis Presley'],
  movies: ['The Notebook', 'La La Land', 'Titanic'],
  foods: ['Italian pasta', 'Sushi', 'Chocolate fondue'],
  places: ['Paris, France', 'Santorini, Greece', 'Bali, Indonesia']
}

export default function Favorites() {
  const [currentSong, setCurrentSong] = useState(0)

  const playNextSong = () => {
    setCurrentSong((prev) => (prev + 1) % favorites.songs.length)
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-center mb-8">Our Favorite Things</h1>
      <div className="grid md:grid-cols-2 gap-8">
        <FavoriteSection title="Our Songs" icon={<FaMusic />} items={favorites.songs} />
        <FavoriteSection title="Our Movies" icon={<FaFilm />} items={favorites.movies} />
        <FavoriteSection title="Our Foods" icon={<FaUtensils />} items={favorites.foods} />
        <FavoriteSection title="Our Places" icon={<FaMapMarkerAlt />} items={favorites.places} />
      </div>
      <div className="mt-12">
        <h2 className="text-3xl md:text-4xl text-center mb-4">Our Playlist</h2>
        <div className="bg-white bg-opacity-75 rounded-lg shadow-xl p-6 max-w-md mx-auto">
          <p className="text-center mb-4 font-playfair text-xl">Now Playing: {favorites.songs[currentSong]}</p>
          <audio
            src={`/music/${currentSong + 1}.mp3`}
            controls
            onEnded={playNextSong}
            className="w-full"
          />
        </div>
      </div>
    </div>
  )
}

function FavoriteSection({ title, icon, items }) {
  return (
    <div className="bg-white bg-opacity-75 rounded-lg shadow-xl p-6">
      <h3 className="text-2xl font-playfair text-rose-800 mb-4 flex items-center">
        {icon}
        <span className="ml-2">{title}</span>
      </h3>
      <ul className="list-disc list-inside">
        {items.map((item, index) => (
          <li key={index} className="mb-2">{item}</li>
        ))}
      </ul>
    </div>
  )
}


'use client'

import { useState, useEffect } from 'react'
import { FaMusic, FaVolumeMute } from 'react-icons/fa'

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)

  useEffect(() => {
    const audio = new Audio('/music/romantic-background.mp3')
    audio.loop = true

    if (isPlaying) {
      audio.play()
    } else {
      audio.pause()
    }

    return () => {
      audio.pause()
    }
  }, [isPlaying])

  return (
    <button
      onClick={() => setIsPlaying(!isPlaying)}
      className="fixed bottom-4 right-4 bg-rose-800 bg-opacity-75 rounded-full p-3 shadow-lg z-20 interactive-hover"
    >
      {isPlaying ? <FaMusic className="text-rose-200" /> : <FaVolumeMute className="text-rose-400" />}
    </button>
  )
}


'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

const questions = [
  { question: "What's Aradhya's favorite color?", answer: "Pink" },
  { question: "Where did we have our first date?", answer: "Botanical Gardens" },
  { question: "What's Aradhya's favorite food?", answer: "Sushi" },
  { question: "In which month is Aradhya's birthday?", answer: "June" },
  { question: "What's our song?", answer: "Perfect by Ed Sheeran" },
]

export default function LoveQuiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [score, setScore] = useState(0)
  const [showResult, setShowResult] = useState(false)
  const [userAnswer, setUserAnswer] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
      setScore(score + 1)
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
      setUserAnswer('')
    } else {
      setShowResult(true)
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-center mb-8">How well do you know Aradhya?</h1>
      {!showResult ? (
        <motion.div
          key={currentQuestion}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -50 }}
          className="bg-white bg-opacity-75 rounded-lg shadow-xl p-8 max-w-2xl mx-auto"
        >
          <h2 className="text-2xl mb-4">Question {currentQuestion + 1} of {questions.length}</h2>
          <p className="text-xl mb-4">{questions[currentQuestion].question}</p>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              className="w-full p-2 mb-4 border border-gray-300 rounded"
              placeholder="Your answer"
              required
            />
            <button
              type="submit"
              className="w-full bg-rose-600 text-white py-3 rounded-lg hover:bg-rose-700 transition duration-300 shadow-md hover:shadow-lg"
            >
              Submit
            </button>
          </form>
        </motion.div>
      ) : (
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="bg-white bg-opacity-75 rounded-lg shadow-xl p-8 max-w-2xl mx-auto text-center"
        >
          <h2 className="text-3xl mb-4">Quiz Complete!</h2>
          <p className="text-2xl mb-4">Your Score: {score} out of {questions.length}</p>
          <p className="text-xl">
            {score === questions.length
              ? "Wow! You know Aradhya perfectly! ❤️"
              : score >= questions.length / 2
              ? "Great job! You know Aradhya pretty well!"
              : "Looks like you have more to learn about Aradhya!"}
          </p>
        </motion.div>
      )}
    </div>
  )
}


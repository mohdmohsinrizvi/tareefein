import { motion } from 'framer-motion'

const timelineEvents = [
  { date: 'April 15, 2020', event: 'First meeting at the coffee shop' },
  { date: 'May 1, 2020', event: 'Our first official date' },
  { date: 'August 20, 2020', event: 'Said "I love you" for the first time' },
  { date: 'December 31, 2020', event: 'Celebrated New Year\'s Eve together' },
  { date: 'June 15, 2021', event: 'Moved in together' },
  { date: 'September 10, 2022', event: 'Romantic getaway to Paris' },
]

export function Timeline() {
  return (
    <div className="mt-16">
      <h2 className="text-3xl md:text-4xl text-center mb-8">Our Milestones</h2>
      <div className="relative">
        {timelineEvents.map((event, index) => (
          <motion.div
            key={index}
            className="mb-8 flex"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex-shrink-0 w-24 text-sm font-semibold text-red-600">{event.date}</div>
            <div className="ml-6 bg-white rounded-lg shadow-md p-4 flex-grow">
              <p>{event.event}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}


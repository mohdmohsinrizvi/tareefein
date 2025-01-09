import './globals.css'
import { Playfair_Display, Lora } from 'next/font/google'
import { Metadata } from 'next'
import Navigation from '@/components/Navigation'
import BackgroundMusic from '@/components/BackgroundMusic'

const playfair = Playfair_Display({ subsets: ['latin'], variable: '--font-playfair' })
const lora = Lora({ subsets: ['latin'], variable: '--font-lora' })

export const metadata: Metadata = {
  title: 'My Heart Belongs to Aradhya',
  description: 'A heartfelt tribute to the love of my life, Aradhya',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable}`}>
      <body className="bg-ivory text-dusty-rose-dark font-lora">
        <Navigation />
        <main className="min-h-screen flex flex-col pt-20 px-4 md:px-8 lg:px-16 space-y-12">
          {children}
        </main>
        <BackgroundMusic />
      </body>
    </html>
  )
}


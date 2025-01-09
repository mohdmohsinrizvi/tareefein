import Image from 'next/image'
/*import { Timeline } from './Timeline'*/

export default function AboutUs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-center mb-8">Our Love Story</h1>
      <div className="grid md:grid-cols-2 gap-8 items-center">
        <div>
          <p className="mb-4">
            Our journey began on a beautiful spring day when we first met at the local coffee shop. 
            The moment our eyes met, we knew there was something special between us.
          </p>
          <p className="mb-4">
            Since that fateful day, we&apos;sve shared countless adventures, laughter, and precious moments. 
            From our first date at the botanical gardens to our romantic getaway in Paris, 
            every moment with you, Aradhya, has been magical.
          </p>
          <p>
            As we look to the future, we dream of building a life filled with love, growth, and endless happiness. 
            Together, we aspire to travel the world, start a family, and support each other in achieving our goals.
          </p>
        </div>
        <div className="relative aspect-square rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/images/couple-laughing.jpg"
            alt="Aradhya and Me laughing together"
            layout="fill"
            objectFit="cover"
          />
        </div>
      </div>
      
    </div>
  )
}


import { FaHeart } from 'react-icons/fa'

export default function Message() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl md:text-5xl text-center mb-8">My Dearest Aradhya</h1>
      <div className="bg-white bg-opacity-75 rounded-lg shadow-xl p-8 max-w-2xl mx-auto">
        <p className="mb-4 text-lg">
          Aradhya, my love, words cannot express how much you mean to me. From the moment we met, 
          you've filled my life with joy, laughter, and endless love. Your smile brightens my darkest days, 
          and your kindness inspires me to be a better person.
        </p>
        <p className="mb-4 text-lg">
          Every moment we spend together is a treasure, and I&apos;sm grateful for the love we share. 
          You are not just my partner, but my best friend, my confidant, and my soulmate. 
          I promise to stand by your side through all of life's adventures, supporting your dreams 
          and cherishing our love.
        </p>
        <p className="mb-8 text-lg">
          Thank you for being you, for loving me, and for making every day extraordinary. 
          I love you more than words can say, and I look forward to creating a lifetime of beautiful 
          memories together.
        </p>
        <div className="text-center text-rose-800 font-playfair text-2xl">
          <p>Forever yours,</p>
          <p>Your Love</p>
        </div>
      </div>
      <div className="mt-12">
        <h2 className="text-3xl md:text-4xl text-center mb-4">A Poem for Aradhya</h2>
        <div className="bg-white bg-opacity-75 rounded-lg shadow-xl p-8 max-w-xl mx-auto relative overflow-hidden">
          <div className="absolute top-0 left-0 w-16 h-16 bg-rose-200 rounded-br-full"></div>
          <div className="absolute bottom-0 right-0 w-16 h-16 bg-rose-200 rounded-tl-full"></div>
          <p className="font-playfair text-2xl text-center relative z-10">
            <span className="text-rose-800 font-bold">A</span>lways in my heart, forever in my soul<br />
            <span className="text-rose-800 font-bold">R</span>adiant beauty, both inside and out<br />
            <span className="text-rose-800 font-bold">A</span> love so pure, it makes my heart whole<br />
            <span className="text-rose-800 font-bold">D</span>reams come true when you're around<br />
            <span className="text-rose-800 font-bold">H</span>appiness blooms wherever you go<br />
            <span className="text-rose-800 font-bold">Y</span>ou're the one I'll always adore<br />
            <span className="text-rose-800 font-bold">A</span> lifetime of love, this I know
          </p>
        </div>
      </div>
    </div>
  )
}


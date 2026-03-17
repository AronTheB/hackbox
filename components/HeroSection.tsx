'use client'

import Image from 'next/image'

const squares = [
  { color: '#f0d040', top: '15%',  left: '4%',  size: 52, rot: '-15deg', delay: '0s' },
  { color: '#e84a4a', top: '4%',  right: '14%', size: 44, rot: '10deg',  delay: '0.4s' },
  { color: '#4ec47a', top: '22%', right: '3%',  size: 40, rot: '-8deg',  delay: '0.8s' },
  { color: '#e05a7a', top: '46%', left: '3%',   size: 46, rot: '12deg',  delay: '0.2s' },
  { color: '#4a9ae8', top: '60%', right: '5%',  size: 42, rot: '-10deg', delay: '0.6s' },
  { color: '#4ec47a', top: '30%', left: '8%',   size: 38, rot: '8deg',   delay: '0.3s' },
  { color: '#f0d040', top: '35%', right: '8%',  size: 50, rot: '-12deg', delay: '0.7s' },
  { color: '#b06ad4', top: '70%', left: '6%',   size: 44, rot: '15deg',  delay: '0.5s' },
  { color: '#e8a44a', top: '80%', right: '4%',  size: 36, rot: '-6deg',  delay: '0.9s' },
]

export default function HeroSection() {
  return (
    <section
      className="relative overflow-hidden py-10 px-6"
      style={{ backgroundColor: '#b5956a', }}
    >
      {squares.map((sq, i) => (
        <div
          key={i}
          className="absolute floating-square"
          style={{
            backgroundColor: sq.color,
            width: sq.size,
            height: sq.size,
            top: sq.top,
            left: sq.left,
            right: sq.right,
            transform: `rotate(${sq.rot})`,
            '--rot': sq.rot,
            borderRadius: '2px',
            boxShadow: '3px 3px 0 rgba(0,0,0,0.2)',
          } as React.CSSProperties}
        />
      ))}

      <div className="flex justify-center mt-4 mb-2 relative z-10">
        <div className="text-center">
          <Image src="/assets/hackbox.png" alt="HackBox" width={400} height={220} priority unoptimized/>
        </div>
      </div>

      <WavyLine />

      <p
        className="text-center mx-auto my-6 relative z-10 leading-relaxed"
        style={{
          maxWidth: 360,
          color: '#5a3e20',
          fontFamily: "'Courier Prime', monospace",
          fontSize: '1rem',
        }}
      >
        Design, build and complete hardware projects. Make video tutorials for
        them and we will ship the materials in a box to other hackers so they
        can learn from your project. And you also get prizes for your projects!
      </p>

      <WavyLine />

      <div className="flex flex-col items-center my-10 relative z-10">
        

        <a
          href="https://forms.fillout.com/t/i9rSf1L3Bius"
          className="px-10 py-2 border-2 text-center font-mono font-bold tracking-widest text-sm uppercase"
          style={{
            borderColor: '#7a5c38',
            color: '#5a3e20',
            backgroundColor: 'transparent',
            fontFamily: "'Courier Prime', monospace",
            letterSpacing: '0.2em',
            transition: 'all 0.2s',
          }}
          onMouseEnter={e => {
            const t = e.currentTarget
            t.style.backgroundColor = '#7a5c38'
            t.style.color = '#c9a97e'
          }}
          onMouseLeave={e => {
            const t = e.currentTarget
            t.style.backgroundColor = 'transparent'
            t.style.color = '#5a3e20'
          }}
        >
          RSVP
        </a>

        
      </div>
    </section>
  )
}

function WavyLine() {
  return (
    <div className="relative z-10 my-2" style={{ opacity: 0.6 }}>
      <svg viewBox="0 0 400 30" xmlns="http://www.w3.org/2000/svg" className="w-full" style={{ maxWidth: 420, margin: '0 auto', display: 'block' }}>
        <path
          d="M0 15 Q25 5 50 15 Q75 25 100 15 Q125 5 150 15 Q175 25 200 15 Q225 5 250 15 Q275 25 300 15 Q325 5 350 15 Q375 25 400 15"
          fill="none"
          stroke="#7a5c38"
          strokeWidth="5"
          strokeLinecap="round"
        />
        
      </svg>
    </div>
  )
}


  
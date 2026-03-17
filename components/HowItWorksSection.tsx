'use client'

import Image from 'next/image'

const steps = [
  {
    number: '1.',
    text: 'Design your project and we will ship you the materials to build it',
    bg: '#e8a44a',
    rot: '-2deg',
  },
  {
    number: '2.',
    text: 'Make video tutorials for your project. And submit them.',
    bg: '#e05a7a',
    rot: '1.5deg',
  },
  {
    number: '3.',
    text: 'We will select the best projects and make them into a HackBox.',
    bg: '#4a9ae8',
    rot: '-1deg',
  },
]

const squares = [
  { color: '#4ec47a', top: '22%', right: '3%',  size: 40, rot: '-8deg',  delay: '0.8s' },
  { color: '#4a9ae8', top: '60%', right: '5%',  size: 42, rot: '-10deg', delay: '0.6s' },
  { color: '#4ec47a', top: '30%', left: '8%',   size: 38, rot: '8deg',   delay: '0.3s' },
  { color: '#b06ad4', top: '70%', left: '6%',   size: 44, rot: '15deg',  delay: '0.5s' },
]

export default function HowItWorksSection() {
  return (
    <section
      className="relative px-6 pb-10 pt-6"
      style={{ backgroundColor: '#b5956a' }}
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
      <div className="flex justify-center mb-8">

        <Image src="/assets/howdoesthiswork.png" alt="How Does This Work?" width={220} height={80} unoptimized/>
      </div>

      <div className="flex flex-wrap justify-center gap-4">
        {steps.map((step, i) => (
          <div
            key={i}
            className="sticky-note p-4 font-mono"
            style={{
              backgroundColor: step.bg,
              width: 140,
              minHeight: 150,
              transform: `rotate(${step.rot})`,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              borderRadius: '2px',
              color: '#2a1a08',
              fontFamily: "'Courier Prime', monospace",
              fontSize: '0.8rem',
              lineHeight: 1.4,
            }}
          >
            <div
              className="font-bold mb-2"
              style={{ fontSize: '1.1rem', color: '#2a1a08' }}
            >
              {step.number}
            </div>
            <p>{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

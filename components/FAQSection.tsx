'use client'
import Image from 'next/image'

interface FAQItem {
  question: string
  answer: string | React.ReactNode
  bg: string
  rot: string
  col: 'left' | 'right'
}

const squares = [
  { color: '#f0d040', top: '15%',  left: '4%',  size: 52, rot: '-15deg', delay: '0s' },
  { color: '#e84a4a', top: '4%',  right: '14%', size: 44, rot: '10deg',  delay: '0.4s' },
  { color: '#4ec47a', top: '21%', right: '3%',  size: 40, rot: '-8deg',  delay: '0.8s' },
  { color: '#e05a7a', top: '46%', left: '3%',   size: 46, rot: '12deg',  delay: '0.2s' },
  { color: '#4a9ae8', top: '60%', right: '5%',  size: 42, rot: '-10deg', delay: '0.6s' },
  { color: '#4ec47a', top: '30%', left: '8%',   size: 38, rot: '8deg',   delay: '0.3s' },
  { color: '#f0d040', top: '35%', right: '8%',  size: 50, rot: '-12deg', delay: '0.7s' },
  { color: '#b06ad4', top: '70%', left: '6%',   size: 44, rot: '15deg',  delay: '0.5s' },
  { color: '#e8a44a', top: '80%', right: '4%',  size: 36, rot: '-6deg',  delay: '0.9s' },
]




const faqs: FAQItem[] = [
  {
    question: 'Who is eligible?',
    answer: 'To be eligible for HackBox, you need to be between the ages for 13 and 18.',
    bg: '#e05a7a',
    rot: '-1deg',
    col: 'left',
  },
  {
    question: "How much does it cost?",
    answer: "It's 100% free! if you design something, we'll pay for all your materials (max 400$).",
    bg: '#4ec47a',
    rot: '1.5deg',
    col: 'right',
  },
  {
    question: "Who's project will become the HackBox?",
    answer: 'Projects that have the most community and judge votes.',
    bg: '#4ac4b4',
    rot: '-0.5deg',
    col: 'left',
  },
  {
    question: 'How many winners will there be?',
    answer: 'Right now we are planning to have 3 winners.',
    bg: '#4ec47a',
    rot: '1deg',
    col: 'right',
  },
  {
    question: 'What is a HackBox?',
    answer: 'HackBox is a box that contains all the materials and instructions for a hardware project, so hackers can build it easily while learning.',
    bg: '#b06ad4',
    rot: '-1.5deg',
    col: 'left',
  },
  {
    question: 'Will HackBoxes be available after the event?',
    answer: 'Yes. We plan on giving HackBoxes in exchange of hours in other HackClub event and also as prizes at hackathons.',
    bg: '#4a9ae8',
    rot: '0.5deg',
    col: 'right',
  },
  {
    question: 'Is this legit?',
    answer: (
      <>
        we&apos;re legit! hack club is the world&apos;s largest community of teenage makers, and a 501(c)(3) nonprofit. we&apos;ve hosted programs like{' '}
        <a href="https://highseas.hackclub.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>high seas</a>{' '}
        and{' '}
        <a href="https://summer.hackclub.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>summer of making</a>{' '}
        which gave out prizes for building other sorts of projects. we&apos;re supported by donations from companies like GitHub or individual generous donations!
      </>
    ),
    bg: '#e8a44a',
    rot: '-1deg',
    col: 'left',
  },
  {
    question: 'Will i get anything if i dont win.',
    answer: 'YES. When you ship a project you will get boxes which can be used in a shop to buy hardware related stuff. You could even buy a HackBox after the event',
    bg: '#4a9ae8',
    rot: '1deg',
    col: 'right',
  },
  {
    question: 'How many projects can i make',
    answer: 'As many as you would like, but you should take time to refine a project instead of starting a new one',
    bg: '#4ec47a',
    rot: '-0.5deg',
    col: 'right',
  },
]

export default function FAQSection() {
  return (
    <section
      className="relative px-4 py-10"
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
      <div className="flex justify-center mb-10">

        <Image src="/assets/faq.png" alt="FAQ" width={180} height={60} unoptimized/>
      </div>

      <div
        className="grid gap-4 mx-auto"
        style={{ maxWidth: 520, gridTemplateColumns: '1fr 1fr' }}
      >
        {faqs.map((faq, i) => (
          <div
            key={i}
            className="sticky-note p-4"
            style={{
              backgroundColor: faq.bg,
              transform: `rotate(${faq.rot})`,
              boxShadow: '4px 4px 0px rgba(0,0,0,0.2)',
              borderRadius: '2px',
              fontFamily: "'Courier Prime', monospace",
              color: '#1a0e05',
              fontSize: '0.78rem',
              lineHeight: 1.45,
              gridColumn: i === faqs.length - 1 && faqs.length % 2 !== 0 ? '1 / -1' : undefined,
            }}
          >
            <p className="font-bold mb-2" style={{ fontSize: '0.82rem' }}>
              {faq.question}
            </p>
            <p>{faq.answer}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

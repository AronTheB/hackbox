export default function Footer() {
  return (
    <footer
      className="py-10 text-center"
      style={{
        backgroundColor: '#b5956a',
        fontFamily: "'Courier Prime', monospace",
        color: '#5a3e20',
        fontSize: '0.9rem',
        lineHeight: 1.8,
        borderTop: '1px solid rgba(90,62,32,0.3)',
      }}
    >
      <p>A HackClub YSWS program</p>
      <p>Made with ❤︎ 
        by <a href="https://hackclub.enterprise.slack.com/team/U0A3HLREX29" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>Aron</a>{' '}
         and <a href="https://hackclub.com" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>HackClub</a>{' '}</p>
      <p></p>
    </footer>
  )
}

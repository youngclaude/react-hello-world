import { useEffect, useState } from 'react'
import './App.css'

function formatTime(date: Date) {
  const pad = (n: number) => String(n).padStart(2, '0')
  return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`
}

function App() {
  const [time, setTime] = useState(() => formatTime(new Date()))

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatTime(new Date()))
    }, 1000)
    return () => window.clearInterval(id)
  }, [])

  return (
    <main className="page">
      <div className="card">
        <p className="eyebrow">Vite + React + TypeScript</p>
        <h1>Hello World</h1>
        <p className="clock" aria-live="polite">{time}</p>
        <p className="subtitle">A simple Cloudflare Pages deployment.</p>
      </div>
    </main>
  )
}

export default App

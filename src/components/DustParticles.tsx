import { useEffect, useRef } from 'react'

interface Particle {
  x: number
  y: number
  r: number
  s: number
  o: number
}

export function DustParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      canvas.style.display = 'none'
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = 0
    let height = 0
    let particles: Particle[] = []
    let frameId: number

    function resize() {
      width = canvas!.width = window.innerWidth
      height = canvas!.height = window.innerHeight
      const n = Math.min(70, Math.floor(width / 22))
      particles = Array.from({ length: n }, () => ({
        x: Math.random() * width,
        y: Math.random() * height,
        r: Math.random() * 1.8 + 0.4,
        s: Math.random() * 0.4 + 0.1,
        o: Math.random() * 0.6 + 0.2,
      }))
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height)
      particles.forEach((p) => {
        p.y -= p.s
        if (p.y < -5) {
          p.y = height + 5
          p.x = Math.random() * width
        }
        ctx!.beginPath()
        ctx!.arc(p.x, p.y, p.r, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(212,175,55,${p.o})`
        ctx!.fill()
      })
      frameId = requestAnimationFrame(draw)
    }

    resize()
    draw()
    window.addEventListener('resize', resize)
    return () => {
      window.removeEventListener('resize', resize)
      cancelAnimationFrame(frameId)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 z-0 h-full w-full opacity-55 pointer-events-none"
    />
  )
}

import { useEffect, useRef } from 'react'
import p5 from 'p5'

const deg = (a) => (Math.PI / 180) * a
const rand = (v1, v2) => Math.floor(v1 + Math.random() * (v2 - v1))

export default function ParticleBackground() {
  const containerRef = useRef(null)
  const p5Instance = useRef(null)

  useEffect(() => {
    if (!containerRef.current) return

    const opt = {
      particles: window.innerWidth > 500 ? 1000 : 500,
      noiseScale: 0.009,
      angle: (Math.PI / 180) * -90,
      h1: rand(0, 360),
      h2: rand(0, 360),
      s1: rand(20, 90),
      s2: rand(20, 90),
      l1: rand(30, 80),
      l2: rand(30, 80),
      strokeWeight: 1.2,
      tail: 82,
    }

    const Particles = []
    let time = 0

    const sketch = (p) => {
      p.setup = () => {
        const canvas = p.createCanvas(window.innerWidth, window.innerHeight)
        canvas.parent(containerRef.current)
        canvas.elt.style.display = 'block'
        canvas.elt.style.position = 'absolute'
        canvas.elt.style.top = '0'
        canvas.elt.style.left = '0'
        canvas.elt.style.width = '100%'
        canvas.elt.style.height = '100%'
        for (let i = 0; i < opt.particles; i++) {
          Particles.push(
            new Particle(p.random(p.width), p.random(p.height), opt)
          )
        }
        p.strokeWeight(opt.strokeWeight)
      }

      p.draw = () => {
        time++
        p.background(0, 100 - opt.tail)

        for (const particle of Particles) {
          particle.update(p, opt, time)
          particle.render(p)
        }
      }

      p.windowResized = () => {
        p.resizeCanvas(window.innerWidth, window.innerHeight)
      }
    }

    class Particle {
      constructor(x, y, opt) {
        this.x = x
        this.y = y
        this.lx = x
        this.ly = y
        this.vx = 0
        this.vy = 0
        this.ax = 0
        this.ay = 0
        this.hueSemen = Math.random()
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2
      }

      randomize(opt) {
        this.hueSemen = Math.random()
        this.hue = this.hueSemen > 0.5 ? 20 + opt.h1 : 20 + opt.h2
        this.sat = this.hueSemen > 0.5 ? opt.s1 : opt.s2
        this.light = this.hueSemen > 0.5 ? opt.l1 : opt.l2
        this.maxSpeed = this.hueSemen > 0.5 ? 3 : 2
      }

      update(p, opt, time) {
        const angle =
          p.noise(
            this.x * opt.noiseScale,
            this.y * opt.noiseScale,
            time * opt.noiseScale
          ) *
            Math.PI *
            0.5 +
          opt.angle

        this.ax += Math.cos(angle)
        this.ay += Math.sin(angle)

        this.vx += this.ax
        this.vy += this.ay

        const speed = Math.sqrt(this.vx * this.vx + this.vy * this.vy)
        const a = Math.atan2(this.vy, this.vx)
        const m = Math.min(this.maxSpeed, speed)
        this.vx = Math.cos(a) * m
        this.vy = Math.sin(a) * m

        this.x += this.vx
        this.y += this.vy
        this.ax = 0
        this.ay = 0

        this.edges(p)
      }

      updatePrev() {
        this.lx = this.x
        this.ly = this.y
      }

      edges(p) {
        if (this.x < 0) {
          this.x = p.width
          this.updatePrev()
        }
        if (this.x > p.width) {
          this.x = 0
          this.updatePrev()
        }
        if (this.y < 0) {
          this.y = p.height
          this.updatePrev()
        }
        if (this.y > p.height) {
          this.y = 0
          this.updatePrev()
        }
      }

      render(p) {
        p.stroke(
          `hsla(${this.hue}, ${this.sat}%, ${this.light}%, 0.5)`
        )
        p.line(this.x, this.y, this.lx, this.ly)
        this.updatePrev()
      }
    }

    const handleClick = () => {
      opt.h1 = rand(0, 360)
      opt.h2 = rand(0, 360)
      opt.s1 = rand(20, 90)
      opt.s2 = rand(20, 90)
      opt.l1 = rand(30, 80)
      opt.l2 = rand(30, 80)
      opt.angle += deg(rand(-60, 60))

      for (const particle of Particles) {
        particle.randomize(opt)
      }
    }

    p5Instance.current = new p5(sketch, containerRef.current)
    document.body.addEventListener('click', handleClick)

    return () => {
      document.body.removeEventListener('click', handleClick)
      p5Instance.current?.remove()
      p5Instance.current = null
    }
  }, [])

  return (
    <div
      ref={containerRef}
      className="pointer-events-none fixed inset-0 z-0 h-screen w-screen bg-black"
      aria-hidden="true"
    />
  )
}

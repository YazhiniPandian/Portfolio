import { useEffect, useRef } from 'react'

const PALETTE = ['#fcfdc8', '#c69fd5', '#b891c9', '#a878b8', '#7a5890']

/**
 * Custom cursor: glowing ring + soft trailing orbs in theme colors.
 * Disabled on touch devices and when user prefers reduced motion.
 */
export default function CursorEffects() {
  const ringRef = useRef(null)
  const trailRef = useRef([])

  useEffect(() => {
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouch = window.matchMedia('(pointer: coarse)').matches
    if (prefersReduced || isTouch) return

    document.body.classList.add('custom-cursor')

    const ring = ringRef.current
    if (!ring) return

    const trailCount = 12
    const container = document.createElement('div')
    container.className = 'cursor-trail-container'
    document.body.appendChild(container)

    const trails = Array.from({ length: trailCount }, (_, i) => {
      const el = document.createElement('div')
      el.className = 'cursor-trail-dot'
      el.style.background = PALETTE[i % PALETTE.length]
      el.style.opacity = String(0.15 + (1 - i / trailCount) * 0.45)
      container.appendChild(el)
      return { el, x: 0, y: 0 }
    })
    trailRef.current = trails

    let mouseX = 0
    let mouseY = 0
    let ringX = 0
    let ringY = 0

    const onMove = (e) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    const onDown = () => ring.classList.add('cursor-ring--active')
    const onUp = () => ring.classList.remove('cursor-ring--active')

    let rafId
    const animate = () => {
      ringX += (mouseX - ringX) * 0.22
      ringY += (mouseY - ringY) * 0.22
      ring.style.transform = `translate(${ringX}px, ${ringY}px) translate(-50%, -50%)`

      trails.forEach((t, i) => {
        const speed = 0.12 + i * 0.018
        t.x += (mouseX - t.x) * speed
        t.y += (mouseY - t.y) * speed
        const scale = 1 - i * 0.06
        t.el.style.transform = `translate(${t.x}px, ${t.y}px) translate(-50%, -50%) scale(${scale})`
      })

      rafId = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    window.addEventListener('mousedown', onDown)
    window.addEventListener('mouseup', onUp)
    rafId = requestAnimationFrame(animate)

    return () => {
      document.body.classList.remove('custom-cursor')
      window.removeEventListener('mousemove', onMove)
      window.removeEventListener('mousedown', onDown)
      window.removeEventListener('mouseup', onUp)
      cancelAnimationFrame(rafId)
      container.remove()
    }
  }, [])

  return (
  <div
    ref={ringRef}
    className="cursor-ring pointer-events-none fixed left-0 top-0 z-[9999] hidden md:block"
    aria-hidden="true"
  />
  )
}

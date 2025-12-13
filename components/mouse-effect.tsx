"use client"

import { useEffect, useRef } from "react"

export default function MouseEffect() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const handleMouseMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      const gradient = `radial-gradient(
        600px at ${x}px ${y}px,
        rgba(237, 137, 54, 0.15),
        rgba(237, 137, 54, 0.05) 80%,
        transparent
      )`

      container.style.backgroundImage = gradient
    }

    container.addEventListener("mousemove", handleMouseMove)
    return () => container.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return <div ref={containerRef} className="fixed inset-0 pointer-events-none transition-all duration-300" />
}

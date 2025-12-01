'use client'

import { useEffect, useRef, useState } from 'react'

const CursorFollower = () => {
  const cursorRef = useRef<HTMLDivElement>(null)
  const cursorDotRef = useRef<HTMLDivElement>(null)
  const [isPointer, setIsPointer] = useState(false)
  const [isHidden, setIsHidden] = useState(() => {
    // Check if it's a touch device on initial render
    if (typeof window !== 'undefined') {
      return 'ontouchstart' in window || navigator.maxTouchPoints > 0
    }
    return false
  })

  useEffect(() => {
    const cursor = cursorRef.current
    const cursorDot = cursorDotRef.current
    
    if (!cursor || !cursorDot) return

    let mouseX = 0
    let mouseY = 0
    let cursorX = 0
    let cursorY = 0
    let dotX = 0
    let dotY = 0

    // Update mouse position
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX
      mouseY = e.clientY
    }

    // Check if hovering over clickable elements
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      if (
        target.tagName === 'BUTTON' ||
        target.tagName === 'A' ||
        target.closest('button') ||
        target.closest('a') ||
        target.style.cursor === 'pointer'
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    // Hide cursor when leaving window
    const handleMouseLeave = () => {
      setIsHidden(true)
    }

    const handleMouseEnter = () => {
      setIsHidden(false)
    }    // Smooth animation loop
    const animate = () => {
      // Smooth following for outer cursor (slower with more delay)
      const speed = 0.1
      cursorX += (mouseX - cursorX) * speed
      cursorY += (mouseY - cursorY) * speed

      // Faster following for dot (moderate delay)
      const dotSpeed = 0.18
      dotX += (mouseX - dotX) * dotSpeed
      dotY += (mouseY - dotY) * dotSpeed

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`
      cursorDot.style.transform = `translate(${dotX}px, ${dotY}px)`

      requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseover', handleMouseOver)
    document.addEventListener('mouseleave', handleMouseLeave)
    document.addEventListener('mouseenter', handleMouseEnter)

    const animationFrame = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseover', handleMouseOver)
      document.removeEventListener('mouseleave', handleMouseLeave)
      document.removeEventListener('mouseenter', handleMouseEnter)
      cancelAnimationFrame(animationFrame)
    }
  }, [])


  return (
    <>
      {/* Outer cursor ring */}      <div
        ref={cursorRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } hidden md:block`}
        style={{
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          marginLeft: isPointer ? '-24px' : '-16px',
          marginTop: isPointer ? '-24px' : '-16px',
          transition: 'width 0.4s cubic-bezier(0.4, 0, 0.2, 1), height 0.4s cubic-bezier(0.4, 0, 0.2, 1), margin 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <div
          className={`w-full h-full rounded-full border-2 transition-all duration-500 ${
            isPointer ? 'border-primary bg-primary/10' : 'border-primary/50 bg-transparent'
          }`}
          style={{
            backdropFilter: 'blur(2px)',
          }}
        />
      </div>

      {/* Inner cursor dot */}
      <div
        ref={cursorDotRef}
        className={`fixed top-0 left-0 pointer-events-none z-[9999] transition-opacity duration-300 ${
          isHidden ? 'opacity-0' : 'opacity-100'
        } hidden md:block`}
        style={{
          width: isPointer ? '8px' : '6px',
          height: isPointer ? '8px' : '6px',
          marginLeft: isPointer ? '-4px' : '-3px',
          marginTop: isPointer ? '-4px' : '-3px',
          transition: 'width 0.2s ease, height 0.2s ease, margin 0.2s ease',
        }}
      >
        <div
          className={`w-full h-full rounded-full transition-colors duration-200 ${
            isPointer ? 'bg-primary' : 'bg-primary'
          }`}
        />
      </div>

      {/* Hide default cursor */}
      <style jsx global>{`
        @media (min-width: 768px) {
          * {
            cursor: none !important;
          }
        }
      `}</style>
    </>
  )
}

export default CursorFollower

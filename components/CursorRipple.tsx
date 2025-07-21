'use client'
import { useEffect } from 'react'

export default function CursorRipple() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const ripple = document.createElement('div')
      ripple.className =
        'fixed w-20 h-20 rounded-full bg-indigo-300 opacity-30 pointer-events-none animate-ripple'
      ripple.style.left = `${e.clientX - 40}px`
      ripple.style.top = `${e.clientY - 40}px`
      document.body.appendChild(ripple)
      setTimeout(() => ripple.remove(), 500)
    }
    window.addEventListener('click', handleClick)
    return () => window.removeEventListener('click', handleClick)
  }, [])

  return null
}

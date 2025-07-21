'use client'

import React from 'react'

type GlowButtonProps = {
  children: React.ReactNode
  onClick?: () => void
  href?: string
  className?: string
}

export default function GlowButton({ children, onClick, href, className = '' }: GlowButtonProps) {
  const buttonStyles = `
    relative px-6 py-3 rounded-full font-semibold text-white
    bg-gradient-to-r from-purple-500 via-pink-500 to-red-500
    shadow-lg hover:shadow-pink-500/50 transition duration-300
    hover:scale-105 focus:outline-none
    before:absolute before:inset-0 before:rounded-full
    before:blur-xl before:bg-pink-500/20 before:opacity-60
    ${className}
  `

  if (href) {
    return (
      <a href={href} onClick={onClick} className={buttonStyles}>
        {children}
      </a>
    )
  }

  return (
    <button onClick={onClick} className={buttonStyles}>
      {children}
    </button>
  )
}

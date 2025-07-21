// components/ScrollProvider.tsx
'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import ScrollTrigger from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

export default function ScrollProvider({ children }: { children: React.ReactNode }) {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const sections = gsap.utils.toArray('.scroll-section')

    sections.forEach((section: any, index: number) => {
      const nextSection = sections[index + 1]

      if (nextSection) {
        ScrollTrigger.create({
          trigger: section,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
          pin: true,
          pinSpacing: false,
          onEnter: () => {
            gsap.fromTo(
              nextSection,
              { y: '100%', opacity: 0 },
              { y: '0%', opacity: 1, duration: 1, ease: 'power2.out' }
            )
          },
        })
      }
    })

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div ref={containerRef} className="scroll-container">
      {children}
    </div>
  )
}

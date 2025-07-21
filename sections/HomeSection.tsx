'use client'

import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'
import PageWrapper from '@/components/PageWrapper'
import Link from 'next/link'

export default function HomeSection() {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '-20%'])

  return (
    <section id="home" ref={ref} className="relative overflow-hidden">
      {/* 🔹 Background Images with Animation */}
      <motion.div
        style={{ y: bgY }}
        className="absolute inset-0 z-0 pointer-events-none"
      >
        <motion.img
          src="/garba1.jpeg"
          alt="Garba 1"
          className="absolute top-10 left-10 w-36 opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1 }}
        />
        <motion.img
          src="/garba1.jpeg"
          alt="Garba 2"
          className="absolute top-1/2 right-12 w-40 opacity-30"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2 }}
        />
        <motion.img
          src="/garba1.jpeg"
          alt="Garba 3"
          className="absolute bottom-10 left-1/2 w-44 opacity-30 -translate-x-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4 }}
        />
      </motion.div>

      {/* 🔹 Main Foreground Content */}
      <div className="relative z-10">
        <PageWrapper>
          <section className="h-screen flex flex-col justify-center items-center bg-gradient-to-br from-purple-600 to-pink-500 text-white px-4 text-center">
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Welcome to Garba Utsav 2025
            </motion.h1>

            <motion.p
              className="text-lg max-w-xl mb-8"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Dance. Culture. Celebration. Join us in the most energetic and vibrant Garba nights this Navratri!
            </motion.p>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              <Link href="#buy-tickets">
                <ScrollReveal>
                  <button className="bg-white text-purple-700 font-semibold px-6 py-3 rounded-full shadow hover:bg-gray-100 transition">
                    Book Your Tickets
                  </button>
                </ScrollReveal>
              </Link>
            </motion.div>
          </section>
        </PageWrapper>
      </div>
    </section>
  )
}

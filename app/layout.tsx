'use client'

import '@/styles/globals.css'
import { ReactNode } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import CursorRipple from '@/components/CursorRipple'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white scroll-smooth">
        <CursorRipple />
        <Navbar />

        {/* Remove key=window.location.pathname to prevent hydration mismatch */}
        <AnimatePresence mode="wait">
          <motion.main
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
          >
            {children}
          </motion.main>
        </AnimatePresence>

        <Footer />
      </body>
    </html>
  )
}

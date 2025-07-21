'use client'

import dynamic from 'next/dynamic'
import { AnimatePresence, motion } from 'framer-motion'
import CursorRipple from '@/components/CursorRipple'
import Navbar from '@/components/Navbar'

// Lazy load sections
const HomeSection = dynamic(() => import('@/sections/HomeSection'), { ssr: false })
const AboutPage = dynamic(() => import('@/sections/AboutSection'), { ssr: false })
const SponsorsPage = dynamic(() => import('@/sections/SponserSection'), { ssr: false })
const EventManagersPage = dynamic(() => import('@/sections/EventManagersSection'), { ssr: false })
const MembersPage = dynamic(() => import('@/sections/MembersSection'), { ssr: false })
const EventGalleryPage = dynamic(() => import('@/sections/GallerySection'), { ssr: false })
const BuyTicketPage = dynamic(() => import('@/sections/BuyTicketsSection'), { ssr: false })
const ContactPage = dynamic(() => import('@/sections/ContactSection'), { ssr: false })

export default function MainPage() {
  return (
    <>
      <CursorRipple />
      <Navbar />

      <AnimatePresence mode="wait">
        <motion.main
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
        >
          <section id="home" className="scroll-mt-20 pt-16">
            <HomeSection />
          </section>
          <section id="about" className="scroll-mt-4 pt-16">
            <AboutPage />
          </section>
          <section id="sponsors" className="scroll-mt-20 pt-16">
            <SponsorsPage />
          </section>
          <section id="event-managers" className="scroll-mt-12 pt-16">
            <EventManagersPage />
          </section>
          <section id="members" className="scroll-mt-12 pt-16">
            <MembersPage />
          </section>
          <section id="event-gallery" className="scroll-mt-6 pt-16">
            <EventGalleryPage />
          </section>
          <section id="buy-tickets" className="scroll-mt-20 pt-16">
            <BuyTicketPage />
          </section>
          <section id="contact" className="scroll-mt-20 pt-16">
            <ContactPage />
          </section>
        </motion.main>
      </AnimatePresence>
    </>
  )
}

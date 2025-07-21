'use client'

import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const sponsors = [
  { name: 'Reliance', logo: '/garba1.jpeg' },
  { name: 'Paytm', logo: '/garba1.jpeg' },
  { name: 'HDFC Bank', logo: '/garba1.jpeg' },
  { name: 'Red Bull', logo: '/garba1.jpeg' },
  { name: 'Zomato', logo: '/garba1.jpeg' },
  { name: 'Tata Motors', logo: '/garba1.jpeg' },
]

export default function Sponsors() {
  return (
    <section id="sponsors" className="min-h-screen px-6 py-16 bg-white">
      <PageWrapper>
        <ScrollReveal>
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Our Sponsors
          </motion.h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {sponsors.map((sponsor, i) => (
            <ScrollReveal key={sponsor.name}>
              <motion.div
                className="bg-zinc-100 rounded-xl shadow-md p-6 flex flex-col items-center justify-center hover:shadow-xl transition"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={sponsor.logo}
                  alt={sponsor.name}
                  className="h-16 object-contain mb-4"
                />
                <p className="font-medium text-gray-700">{sponsor.name}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </PageWrapper>
    </section>
  )
}

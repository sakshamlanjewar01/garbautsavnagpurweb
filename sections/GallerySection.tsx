'use client'

import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const images = [
  '/garba1.jpeg',
  '/garba1.jpeg',
  '/garba1.jpeg',
  '/garba1.jpeg',
  '/garba1.jpeg',
  '/garba1.jpeg',
]

export default function EventGalleryPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white px-6 py-16">
        <ScrollReveal>
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Event Gallery
          </motion.h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {images.map((img, i) => (
            <ScrollReveal key={i}>
              <motion.div
                className="overflow-hidden rounded-xl shadow-lg group"
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={img}
                  alt={`Event Image ${i + 1}`}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

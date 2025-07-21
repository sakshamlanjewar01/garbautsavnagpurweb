'use client'

import PageWrapper from '@/components/PageWrapper'
import ScrollReveal from '@/components/ScrollReveal'
import { motion } from 'framer-motion'

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen p-6 md:p-10">
        {/* Header */}
        <ScrollReveal>
          <motion.h1
            className="text-4xl font-bold mb-4 text-center"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            About Garba Utsav
          </motion.h1>
        </ScrollReveal>

        <ScrollReveal>
          <motion.p
            className="text-center max-w-3xl mx-auto mb-12 text-gray-700"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Garba Utsav is a vibrant cultural event that celebrates the tradition of Garba — a dance of devotion, energy, and community. Rooted in the spirit of Navratri, the Utsav brings people together through music, color, and celebration.
          </motion.p>
        </ScrollReveal>

        {/* Timeline / Story */}
        <div className="space-y-12 max-w-5xl mx-auto">
          {[
            {
              year: '2018',
              title: 'The Beginning',
              desc: 'What started as a small community dance event quickly became a local cultural highlight.',
            },
            {
              year: '2020',
              title: 'Growing Stronger',
              desc: 'Even amidst challenges, the spirit of Garba remained alive through virtual celebrations.',
            },
            {
              year: '2023',
              title: 'Back with a Bang!',
              desc: 'With energy unmatched, the 2023 Utsav returned with thousands joining in the celebrations.',
            },
            {
              year: '2025',
              title: 'Bigger Than Ever',
              desc: 'This year, we’re going bigger with more artists, better sound, grand decor, and unforgettable nights!',
            },
          ].map((item, i) => (
            <ScrollReveal key={item.year}>
              <motion.div
                className="bg-zinc-100 p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold text-purple-700 mb-1">
                  {item.year} — {item.title}
                </h3>
                <p className="text-gray-700">{item.desc}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

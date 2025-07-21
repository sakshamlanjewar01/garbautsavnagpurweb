'use client'

import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const members = [
  {
    name: 'Saksham Lanjewar',
    role: 'Founder & Organizer',
    img: '/garba1.jpeg',
  },
  {
    name: 'Aarav Mehta',
    role: 'Music Director',
    img: '/garba1.jpeg',
  },
  {
    name: 'Riya Shah',
    role: 'Creative Head',
    img: '/garba1.jpeg',
  },
  {
    name: 'Dev Patel',
    role: 'Logistics Lead',
    img: '/garba1.jpeg',
  },
  {
    name: 'Neha K.',
    role: 'Marketing Manager',
    img: '/garba1.jpeg',
  },
  {
    name: 'Yash Soni',
    role: 'Volunteer Coordinator',
    img: '/garba1.jpeg',
  },
]

export default function MembersPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen px-6 py-16 bg-white">
        <ScrollReveal>
          <motion.h1
            className="text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Meet Our Team
          </motion.h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {members.map((member, i) => (
            <ScrollReveal key={member.name}>
              <motion.div
                className="bg-zinc-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{member.name}</h3>
                <p className="text-sm text-gray-600">{member.role}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

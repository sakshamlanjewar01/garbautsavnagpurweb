'use client'

import PageWrapper from '@/components/PageWrapper'
import { motion } from 'framer-motion'
import ScrollReveal from '@/components/ScrollReveal'

const managers = [
  {
    name: 'Kunal Sharma',
    department: 'Stage Management',
    image: '/garba1.jpeg',
  },
  {
    name: 'Ishita Desai',
    department: 'Security & Entry',
    image: '/garba1.jpeg',
  },
  {
    name: 'Rahul Verma',
    department: 'Food Stalls',
    image: '/garba1.jpeg',
  },
  {
    name: 'Simran Bhatt',
    department: 'Audience Coordination',
    image: '/garba1.jpeg',
  },
  {
    name: 'Varun Rao',
    department: 'Lighting & Sound',
    image: '/garba1.jpeg',
  },
  {
    name: 'Sneha Joshi',
    department: 'Cultural Events',
    image: '/garba1.jpeg',
  },
]

export default function EventManagersPage() {
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
            Event Managers
          </motion.h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {managers.map((manager, i) => (
            <ScrollReveal key={manager.name}>
              <motion.div
                className="bg-zinc-100 rounded-xl shadow-md p-6 text-center hover:shadow-xl transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <img
                  src={manager.image}
                  alt={manager.name}
                  className="w-24 h-24 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold">{manager.name}</h3>
                <p className="text-sm text-gray-600">{manager.department}</p>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

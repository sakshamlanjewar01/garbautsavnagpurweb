'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import PageWrapper from '@/components/PageWrapper'
import ScrollReveal from '@/components/ScrollReveal'

const tickets = [
  {
    type: 'Regular Pass',
    price: '₹299',
    features: ['Access All Days', 'Entry Before 9 PM', 'Basic Seating'],
  },
  {
    type: 'Premium Pass',
    price: '₹599',
    features: ['All Regular Perks', 'Front Stage Area', 'Welcome Kit'],
  },
  {
    type: 'VIP Pass',
    price: '₹999',
    features: ['Backstage Access', 'VIP Lounge', 'Free Refreshments'],
  },
]

export default function BuyTicketPage() {
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
            Book Your Garba Pass
          </motion.h1>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {tickets.map((ticket, i) => (
            <ScrollReveal key={ticket.type}>
              <motion.div
                className="bg-zinc-100 rounded-xl shadow-md p-6 text-center border-2 border-transparent hover:border-indigo-500 transition"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-semibold mb-2">{ticket.type}</h3>
                <p className="text-3xl font-bold text-indigo-600 mb-4">{ticket.price}</p>
                <ul className="text-gray-600 text-sm mb-6 space-y-1">
                  {ticket.features.map((f, idx) => (
                    <li key={idx}>• {f}</li>
                  ))}
                </ul>
                <Button variant="default" className="w-full">
                  Book Now
                </Button>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </PageWrapper>
  )
}

'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import PageWrapper from '@/components/PageWrapper'
import ScrollReveal from '@/components/ScrollReveal'

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="min-h-screen bg-white px-6 py-16">
        <ScrollReveal>
          <motion.h1
            className="text-4xl font-bold text-center mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Contact Us
          </motion.h1>
        </ScrollReveal>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <ScrollReveal>
            <motion.form
              className="space-y-6"
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  rows={4}
                  placeholder="Your message..."
                  className="w-full border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </motion.form>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal>
            <motion.div
              className="text-sm text-zinc-700 space-y-6"
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div>
                <h3 className="text-lg font-semibold mb-1">Email</h3>
                <p>garbautsav@gmail.com</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Phone</h3>
                <p>+91 98765 43210</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1">Location</h3>
                <p>Garba Ground, Near Central Park, Vadodara, Gujarat</p>
              </div>
            </motion.div>
          </ScrollReveal>
        </div>
      </div>
    </PageWrapper>
  )
}

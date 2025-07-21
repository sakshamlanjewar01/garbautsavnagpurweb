'use client'

import { useState } from 'react'
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6'

const Navbar = () => {
  const [open, setOpen] = useState(false)

  const links = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#sponsors', label: 'Sponsors' },
    { href: '#event-managers', label: 'Event Managers' },
    { href: '#members', label: 'Members' },
    { href: '#event-gallery', label: 'Event Gallery' },
    { href: '#buy-tickets', label: 'Buy Tickets' },
    { href: '#contact', label: 'Contact Us' },
  ]

  const NavLink = ({ href, label }: { href: string; label: string }) => (
    <a
      href={href}
      className="relative uppercase text-sm font-semibold text-gray-800 px-3 py-2 transition-all duration-300 hover:text-indigo-600 group"
      onClick={() => setOpen(false)} // Close mobile nav after click
    >
      <span className="inline-block transition-all group-hover:tracking-widest duration-300">
        {label}
      </span>
      <span className="absolute left-1/2 bottom-0 w-0 h-0.5 bg-indigo-600 transition-all duration-300 group-hover:w-full group-hover:left-0"></span>
    </a>
  )

  return (
    <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#home">
          <h1 className="text-2xl font-bold uppercase cursor-pointer">Garba Utsav</h1>
        </a>

        {/* Nav Links - Desktop */}
        <div className="hidden md:flex space-x-4">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
        </div>

        {/* Social Icons - Desktop */}
        <div className="hidden md:flex space-x-4">
          <a href="https://facebook.com" target="_blank" aria-label="Facebook">
            <FaFacebookF className="text-blue-600 hover:scale-110 transition text-lg" />
          </a>
          <a href="https://instagram.com" target="_blank" aria-label="Instagram">
            <FaInstagram className="text-pink-500 hover:scale-110 transition text-lg" />
          </a>
          <a href="https://twitter.com" target="_blank" aria-label="Twitter">
            <FaXTwitter className="text-black hover:scale-110 transition text-lg" />
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button onClick={() => setOpen(!open)} className="md:hidden text-2xl">
          ☰
        </button>
      </div>

      {/* Mobile Dropdown */}
      {open && (
        <div className="md:hidden px-4 mt-4 flex flex-col space-y-3">
          {links.map((link) => (
            <NavLink key={link.href} href={link.href} label={link.label} />
          ))}
          <div className="flex space-x-4 mt-2">
            <a href="https://facebook.com" target="_blank" aria-label="Facebook">
              <FaFacebookF className="text-blue-600 text-lg" />
            </a>
            <a href="https://instagram.com" target="_blank" aria-label="Instagram">
              <FaInstagram className="text-pink-500 text-lg" />
            </a>
            <a href="https://twitter.com" target="_blank" aria-label="Twitter">
              <FaXTwitter className="text-black text-lg" />
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar

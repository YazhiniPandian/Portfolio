import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiMenu, HiX } from 'react-icons/hi'

const navLinks = [
  { href: '#hero', label: 'Home' },
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#achievements', label: 'Achievements' },
  { href: '#certifications', label: 'Certifications' },
  { href: '#github', label: 'GitHub' },
  { href: '#resume', label: 'Resume' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const linkClass = scrolled
    ? 'text-[#c69fd5] hover:text-[#a878b8]'
    : 'text-[#c69fd5] hover:text-[#a878b8]'

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'glass-cream py-3 shadow-[0_8px_32px_rgba(94,64,112,0.12)]'
            : 'bg-transparent py-5'
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <a
            href="#hero"
            className={`font-serif text-xl font-bold transition ${
              scrolled ? 'text-[#c69fd5] hover:text-[#a878b8]' : 'text-[#c69fd5] hover:text-[#a878b8]'
            }`}
          >
            AYP
          </a>
          <ul className="hidden items-center gap-5 md:flex lg:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={`text-sm font-medium transition ${linkClass}`}
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <button
            type="button"
            className={`rounded-xl p-2 transition md:hidden ${
              scrolled
                ? 'text-[#c69fd5] hover:bg-[#c69fd5]/10'
                : 'text-[#c69fd5] hover:bg-[#c69fd5]/10'
            }`}
            onClick={() => setMobileOpen(true)}
            aria-label="Open menu"
          >
            <HiMenu size={24} />
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-[#c69fd5]/60 backdrop-blur-sm md:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="glass-cream fixed right-0 top-0 z-[70] flex h-full w-72 flex-col gap-2 p-6 shadow-xl md:hidden"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween' }}
            >
              <div className="flex justify-end">
                <button
                  type="button"
                  className="rounded-xl p-2 text-[#c69fd5] hover:bg-[#c69fd5]/10"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close menu"
                >
                  <HiX size={24} />
                </button>
              </div>
              <ul className="flex flex-col gap-1">
                {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="block rounded-xl px-4 py-3 text-[#c69fd5] transition hover:bg-[#c69fd5]/8 hover:text-[#a878b8]"
                      onClick={() => setMobileOpen(false)}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  )
}

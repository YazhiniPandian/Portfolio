import { useState } from 'react'
import { motion } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaInstagram } from 'react-icons/fa'
import { RESUME_PATH } from './Resume'

const socialLinks = [
  { Icon: FaGithub, href: 'https://github.com/YazhiniPandian', label: 'GitHub' },
  { Icon: FaLinkedin, href: 'https://www.linkedin.com/in/abhiyazhinip2226/', label: 'LinkedIn' },
  { Icon: FaEnvelope, href: 'mailto:abhiyazhini22@gmail.com', label: 'Email' },
  { Icon: FaInstagram, href: '#', label: 'Instagram' },
]

const PROFILE_PATH = '/profile.png'
const PROFILE_FALLBACK = '/profile-placeholder.svg'

function HeroBackground() {
  return (
    <div className="hero-bg pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="hero-bg-cream absolute inset-0 bg-[#fcfdc8]" />
      <div className="hero-bg-footer" />
      <div className="hero-dot-grid absolute left-[4%] top-[18%] opacity-40" />
      <div className="hero-dot-grid absolute right-[12%] top-[28%] opacity-30" />
    </div>
  )
}

export default function Hero() {
  const [profileSrc, setProfileSrc] = useState(PROFILE_PATH)

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleProfileError = () => {
    setProfileSrc((prev) => {
      if (prev === '/profile.png') return '/profile.jpg'
      if (prev === '/profile.jpg') return PROFILE_FALLBACK
      return prev
    })
  }

  return (
    <section id="hero" className="hero-landing relative min-h-screen overflow-hidden">
      <HeroBackground />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col px-4 pb-6 pt-28 sm:px-6 lg:px-8 lg:pb-8 lg:pt-32">
        <div className="grid flex-1 items-end gap-6 lg:grid-cols-[1fr_1.05fr] lg:gap-2">
          {/* Left — text on cream */}
          <motion.div
            className="pb-8 lg:pb-20"
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <span className="hero-hello-badge mb-6 inline-flex items-center gap-2 rounded-full border border-[#c69fd5]/25 bg-[#fcfdc8] px-4 py-2 text-sm font-medium text-[#c69fd5] shadow-sm">
              ✨ Hello, I&apos;m
            </span>

            <h1 className="mb-4 max-w-xl text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] text-[#c69fd5]">
              Abhi Yazhini P
            </h1>

            <p className="mb-4 text-lg font-medium text-[#c69fd5] sm:text-xl">
              Software Developer | Full Stack Developer
            </p>

            <p className="mb-8 max-w-md text-base leading-relaxed text-[#c69fd5]/90 sm:text-lg">
              I build beautiful, user-friendly web applications that solve real world problems.
            </p>

            <div className="mb-8 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => scrollTo('projects')}
                className="btn-primary inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base"
              >
                View Projects
                <span aria-hidden>→</span>
              </button>
              <button
                type="button"
                onClick={() => scrollTo('contact')}
                className="btn-ghost inline-flex items-center gap-2 px-7 py-3.5 text-sm sm:text-base"
              >
                Contact Me
              </button>
              <a
                href={RESUME_PATH}
                download="Abhi_Yazhini_P_Resume.pdf"
                className="btn-ghost hidden px-6 py-3.5 text-sm sm:inline-flex sm:text-base"
              >
                Resume
              </a>
            </div>

            <div className="flex items-center gap-4">
              {socialLinks.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('http') ? '_blank' : undefined}
                  rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  aria-label={label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-[#c69fd5]/20 text-[#c69fd5] transition hover:border-[#c69fd5]/45 hover:bg-[#c69fd5]/10"
                >
                  <Icon size={18} />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Right — cutout profile bound into background */}
          <motion.div
            className="hero-profile-zone relative mx-auto w-full max-w-[520px] lg:mx-0 lg:max-w-none"
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <div className="hero-profile-stage">
              <div className="hero-profile-backdrop" aria-hidden="true" />
              <img
                src={profileSrc}
                alt="Abhi Yazhini P"
                className="hero-profile-image"
                onError={handleProfileError}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

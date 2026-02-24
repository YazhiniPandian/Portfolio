import { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Typed from 'typed.js'
import { FaGithub, FaReact, FaPython, FaJava, FaShieldAlt } from 'react-icons/fa'
import ParticleBackground from './ParticleBackground'

const floatingIcons = [
  { Icon: FaReact, label: 'React', delay: 0, x: '10%', y: '20%' },
  { Icon: FaPython, label: 'Python', delay: 0.2, x: '85%', y: '25%' },
  { Icon: FaJava, label: 'Java', delay: 0.4, x: '15%', y: '70%' },
  { Icon: FaShieldAlt, label: 'Security', delay: 0.3, x: '80%', y: '65%' },
  { Icon: FaGithub, label: 'GitHub', delay: 0.5, x: '50%', y: '85%' },
]

export default function Hero() {
  const typedRef = useRef(null)

  useEffect(() => {
    const options = {
      strings: ['Full Stack Learner', 'Web Developer'],
      typeSpeed: 60,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
    }
    const typed = new Typed(typedRef.current, options)
    return () => typed.destroy()
  }, [])

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section id="hero" className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-mesh">
      <ParticleBackground />
      {/* Floating tech icons */}
      {floatingIcons.map(({ Icon, label, delay, x, y }) => (
        <motion.div
          key={label}
          className="absolute hidden rounded-xl glass p-3 text-2xl text-[#00d4ff] opacity-60 lg:flex"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{
            opacity: 0.6,
            scale: 1,
            y: [0, -8, 0],
          }}
          transition={{
            opacity: { delay: 1 + delay },
            y: { duration: 3, repeat: Infinity, ease: 'easeInOut', delay },
          }}
          aria-hidden
        >
          <Icon />
        </motion.div>
      ))}

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.p
          className="mb-2 text-sm font-medium uppercase tracking-widest text-[#00d4ff]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Hello, I&apos;m
        </motion.p>
        <motion.h1
          className="mb-3 text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          Abhi Yazhini <span className="text-gradient">P</span>
        </motion.h1>
        <motion.p
          className="mb-2 text-lg text-gray-400 sm:text-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Computer Science Engineering Student | Web Developer
        </motion.p>
        <motion.div
          className="mb-6 min-h-[2rem] text-xl font-medium text-[#a855f7] sm:text-2xl"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <span ref={typedRef} />
        </motion.div>
        <motion.p
          className="mb-10 text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          &ldquo;Securing Systems. Building Intelligent Solutions.&rdquo;
        </motion.p>
        <motion.div
          className="flex flex-wrap items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.7 }}
        >
          <button
            type="button"
            onClick={() => scrollTo('projects')}
            className="group relative overflow-hidden rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] px-8 py-3.5 font-semibold text-white shadow-lg transition hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
          >
            <span className="relative z-10">View Projects</span>
          </button>
          <button
            type="button"
            onClick={() => scrollTo('contact')}
            className="rounded-xl border border-[#00d4ff]/50 bg-white/5 px-8 py-3.5 font-semibold text-[#00d4ff] backdrop-blur transition hover:bg-[#00d4ff]/10 hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
          >
            Contact Me
          </button>
        </motion.div>
      </div>
    </section>
  )
}

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Tilt from 'react-parallax-tilt'

const projects = [
  {
    title: 'House Rental System',
    description: 'Desktop application for managing house rentals built with Java and Swing for GUI.',
    tech: ['Java', 'Swing'],
  },
  {
    title: 'Crime File Management System',
    description: 'Web-based system for managing crime records with PHP, MySQL, and UML modeling.',
    tech: ['PHP', 'MySQL', 'UML'],
  },
  {
    title: 'Sync Screen to Sight – Eye Comfort Reader App',
    description: 'Patent Applied. Reader app designed for eye comfort and accessibility.',
    tech: ['Mobile', 'Patent'],
  },
  {
    title: 'SecureChat - Secure Messaging System',
    description:
      'A real-time secure chat application built with Flutter, Firebase, and Supabase. It supports OTP authentication, end-to-end encrypted messaging using AES, RSA, ChaCha20, secure media sharing, chat request approval, and privacy-focused communication.',
    tech: ['Flutter', 'Dart', 'Firebase', 'Supabase', 'AES', 'RSA', 'ChaCha20', 'ECDSA'],
  },
  {
    title: 'College Event Management System',
    description: 'Platform for managing college events, registrations, and scheduling.',
    tech: ['Web', 'Database'],
  },
  {
    title: 'SIH 2025 – AI-Driven Train Induction Planning & Scheduling',
    description: 'Smart India Hackathon 2025 project for AI-driven train induction planning and scheduling.',
    tech: ['AI', 'Planning', 'SIH'],
  },
]

function ProjectCard({ project }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      glareEnable
      glareMaxOpacity={0.12}
      glareColor="#fcfdc8"
      glarePosition="all"
      glareBorderRadius="2rem"
    >
      <motion.div
        className="glass-cream glass-reflection h-full p-7 transition hover:glow-cream"
        whileHover={{ y: -4 }}
      >
        <h3 className="mb-3 text-xl font-bold text-[#c69fd5]">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-[#c69fd5]/85">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-lg bg-[#c69fd5]/12 px-2.5 py-1 text-xs font-semibold text-[#c69fd5]"
            >
              {t}
            </span>
          ))}
        </div>
      </motion.div>
    </Tilt>
  )
}

export default function Projects() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section id="projects" ref={ref} className="section-padding section-tone-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Portfolio</p>
          <h2 className="section-title">
            <span className="text-gradient">Projects</span>
          </h2>
        </motion.div>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

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

function ProjectCard({ project, index }) {
  return (
    <Tilt
      tiltMaxAngleX={8}
      tiltMaxAngleY={8}
      scale={1.02}
      glareEnable
      glareMaxOpacity={0.15}
      glareColor="#00d4ff"
      glarePosition="all"
      glareBorderRadius="1rem"
    >
      <motion.div
        className="glass h-full rounded-2xl border border-white/10 p-6 transition hover:border-[#00d4ff]/40 hover:shadow-[0_0_35px_rgba(0,212,255,0.2)]"
        whileHover={{ y: -4 }}
      >
        <h3 className="mb-3 text-xl font-bold text-white">{project.title}</h3>
        <p className="mb-4 text-sm leading-relaxed text-gray-400">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="rounded-md bg-[#00d4ff]/10 px-2.5 py-1 text-xs font-medium text-[#00d4ff]"
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
    <section id="projects" ref={ref} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Projects</span>
        </motion.h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <ProjectCard project={project} index={i} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

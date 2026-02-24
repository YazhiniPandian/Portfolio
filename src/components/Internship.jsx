import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { FaReact, FaNode, FaAws, FaGitAlt } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostman } from 'react-icons/si'

gsap.registerPlugin(ScrollTrigger)

const responsibilities = [
  'Developed responsive UI using React.js',
  'Integrated Spring Boot REST APIs',
  'Backend support using Node.js',
  'Database handling with MySQL',
  'Cloud basics using AWS',
  'API testing with Postman',
  'Used IntelliJ and Maven',
  'Version control using Git and GitHub',
]

const techIcons = [
  { Icon: FaReact, label: 'React' },
  { Icon: SiSpringboot, label: 'Spring Boot' },
  { Icon: FaNode, label: 'Node.js' },
  { Icon: SiMysql, label: 'MySQL' },
  { Icon: FaAws, label: 'AWS' },
  { Icon: SiPostman, label: 'Postman' },
  { Icon: FaGitAlt, label: 'Git' },
]

export default function Internship() {
  const sectionRef = useRef(null)
  const lineRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 })

  useEffect(() => {
    if (!lineRef.current) return
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        duration: 1,
        ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 60%' },
      }
    )
  }, [])

  return (
    <section id="experience" ref={sectionRef} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-16 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Internship</span> Experience
        </motion.h2>

        <div className="relative">
          {/* Vertical line */}
          <div
            ref={lineRef}
            className="absolute left-6 top-0 h-full w-0.5 origin-top rounded-full bg-gradient-to-b from-[#00d4ff] to-[#a855f7] md:left-1/2 md:-translate-x-px"
            style={{ transformOrigin: 'top' }}
          />
          {/* Timeline card */}
          <motion.div
            className="relative ml-14 md:ml-0 md:flex md:justify-center"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="absolute left-2 top-6 h-4 w-4 rounded-full border-2 border-[#00d4ff] bg-[#0a0a0f] md:left-1/2 md:-translate-x-1/2" />
            <div className="glass-strong rounded-2xl p-6 transition hover:shadow-[0_0_40px_rgba(0,212,255,0.12)] md:max-w-2xl md:p-8">
              <div className="mb-2 text-sm font-medium text-[#00d4ff]">Yaazh Tech Pvt Ltd</div>
              <h3 className="mb-1 text-xl font-bold text-white">
                Frontend Developer Intern (Java Full Stack Development)
              </h3>
              <p className="mb-4 text-gray-400">Project: Bank Management System</p>
              <ul className="mb-6 space-y-2 text-gray-300">
                {responsibilities.map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a855f7]" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {techIcons.map(({ Icon, label }) => (
                  <span
                    key={label}
                    className="flex items-center gap-1.5 rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-3 py-1.5 text-sm text-gray-300"
                  >
                    <Icon className="text-[#00d4ff]" /> {label}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

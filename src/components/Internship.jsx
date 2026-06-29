import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaReact, FaNode, FaAws, FaGitAlt, FaBuilding, FaLaptopCode } from 'react-icons/fa'
import { SiSpringboot, SiMysql, SiPostman } from 'react-icons/si'

const highlights = [
  { title: 'UI Development', desc: 'Responsive interfaces with React.js' },
  { title: 'API Integration', desc: 'Spring Boot REST APIs & Postman testing' },
  { title: 'Backend & Data', desc: 'Node.js support and MySQL databases' },
  { title: 'Cloud & Tools', desc: 'AWS basics, IntelliJ, Maven, Git/GitHub' },
]

const techStack = [
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
  const isInView = useInView(sectionRef, { once: true, amount: 0.15 })

  return (
    <section id="experience" ref={sectionRef} className="section-padding section-tone-wisteria">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-14 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label section-label-light">Professional journey</p>
          <h2 className="section-title section-title-light">
            <span className="text-gradient-light">Experience</span>
          </h2>
        </motion.div>

        <motion.article
          className="glass-wisteria glass-reflection overflow-hidden glow-wisteria"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Header strip */}
          <div className="flex flex-col gap-4 border-b border-[#fcfdc8]/25 bg-[#c69fd5]/20 px-6 py-6 sm:flex-row sm:items-center sm:justify-between md:px-10">
            <div className="flex items-start gap-4">
              <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-[#fcfdc8]/25 text-2xl text-[#fcfdc8]">
                <FaBuilding />
              </span>
              <div>
                <h3 className="text-xl font-bold text-[#fcfdc8] md:text-2xl">
                  Frontend Developer Intern
                </h3>
                <p className="text-body-muted-light">Java Full Stack Development · Yaazh Tech Pvt Ltd</p>
              </div>
            </div>
            <span className="inline-flex w-fit items-center gap-2 rounded-full bg-[#fcfdc8]/20 px-4 py-2 text-sm font-medium text-[#fcfdc8]">
              <FaLaptopCode className="text-[#fcfdc8]" />
              Bank Management System
            </span>
          </div>

          {/* Highlight grid */}
          <div className="grid gap-4 p-6 sm:grid-cols-2 md:p-10 lg:grid-cols-4">
            {highlights.map((item, i) => (
              <motion.div
                key={item.title}
                className="glass-cream p-5 transition hover:glow-cream"
                initial={{ opacity: 0, y: 16 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.2 + i * 0.08 }}
              >
                <div
                  className="mb-3 h-1 w-10 rounded-full"
                  style={{
                    background: `linear-gradient(90deg, #fcfdc8, ${['#a878b8', '#b891c9', '#c69fd5', '#7a5890'][i]})`,
                  }}
                />
                <h4 className="mb-1 font-semibold text-[#c69fd5]">{item.title}</h4>
                <p className="text-sm leading-relaxed text-[#c69fd5]/85">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Tech stack row */}
          <div className="border-t border-[#fcfdc8]/25 px-6 py-6 md:px-10">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-body-muted-light">
              Stack & tools
            </p>
            <div className="flex flex-wrap gap-3">
              {techStack.map(({ Icon, label }) => (
                <span
                  key={label}
                  className="flex items-center gap-2 rounded-xl border border-[#fcfdc8]/30 bg-[#fcfdc8]/15 px-4 py-2 text-sm font-medium text-[#fcfdc8] transition hover:bg-[#fcfdc8]/25"
                >
                  <Icon className="text-[#fcfdc8]" />
                  {label}
                </span>
              ))}
            </div>
          </div>
        </motion.article>
      </div>
    </section>
  )
}

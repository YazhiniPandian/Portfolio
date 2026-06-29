import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward } from 'react-icons/fa'

const certifications = [
  { name: 'HTML Certification' },
  { name: 'C Certification' },
  { name: 'Microsoft Office Certification' },
  { name: 'Overview of Data Visualization' },
  { name: 'Business Analysis and Process Management' },
  {
    name: 'Introduction to Industry 4.0 and Industrial Internet of Things',
    marks: '82%',
  },
  {
    name: 'Human Computer Interaction (in English)',
    marks: '96%',
  },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.1 })

  return (
    <section id="certifications" ref={ref} className="section-padding section-tone-cream">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
        >
          <p className="section-label">Credentials</p>
          <h2 className="section-title">
            <span className="text-gradient">Certifications</span>
          </h2>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, i) => (
            <motion.article
              key={cert.name}
              className="glass-cream glass-reflection flex items-start gap-4 p-5 transition hover:glow-cream"
              initial={{ opacity: 0, y: 24 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.45, delay: i * 0.07 }}
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#c69fd5]/15 text-lg text-[#c69fd5]">
                <FaAward />
              </span>
              <div className="min-w-0 flex-1">
                <p className="text-sm font-semibold leading-snug text-[#c69fd5]">{cert.name}</p>
                {cert.marks && (
                  <p className="mt-1.5 text-xs font-bold uppercase tracking-wide text-[#c69fd5]/75">
                    Score: {cert.marks}
                  </p>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}

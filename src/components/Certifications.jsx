import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaAward } from 'react-icons/fa'

const certifications = [
  { name: 'HTML Certification' },
  { name: 'C Certification' },
  { name: 'Microsoft Office Certification' },
  { name: 'Coursera: Overview of Data Visualization' },
  { name: 'Coursera: Business Analysis and Process Management' },
  { name: 'NPTEL: Industrial 4.0', highlight: '82%' },
]

export default function Certifications() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="certifications" ref={ref} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Certifications</span>
        </motion.h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {certifications.map((cert, i) => (
            <motion.div
              key={cert.name}
              className="glass flex items-center justify-between gap-4 rounded-xl p-5 transition hover:border-[#00d4ff]/30 hover:shadow-[0_0_25px_rgba(0,212,255,0.12)]"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.4, delay: i * 0.08 }}
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#00d4ff]/10 text-[#00d4ff]">
                  <FaAward />
                </span>
                <span className="text-gray-300">{cert.name}</span>
              </div>
              {cert.highlight && (
                <span className="rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] px-3 py-1 text-sm font-semibold text-white">
                  {cert.highlight}
                </span>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

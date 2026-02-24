import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const achievements = [
  'Cybersecurity Workshop – Bannari Amman Institute of Technology',
  'Paper Presentation – Sri Ramakrishna College of Engineering',

]

const counters = [
  { end: 3, suffix: '+', label: 'Achievements' },
]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="achievements" ref={ref} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Achievements</span>
        </motion.h2>
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {counters.map(({ end, suffix, label }) => (
            <motion.div
              key={label}
              className="glass rounded-2xl px-8 py-6 text-center transition hover:border-[#00d4ff]/40 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)]"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-[#00d4ff] md:text-4xl">
                <CountUp end={end} suffix={suffix} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="mt-1 text-sm text-gray-400">{label}</div>
            </motion.div>
          ))}
        </div>
        <ul className="space-y-4">
          {achievements.map((item, i) => (
            <motion.li
              key={item}
              className="glass flex items-center gap-4 rounded-xl px-6 py-4 transition hover:border-[#a855f7]/30 hover:shadow-[0_0_25px_rgba(168,85,247,0.1)]"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-sm font-bold text-white">
                {i + 1}
              </span>
              <span className="text-gray-300">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

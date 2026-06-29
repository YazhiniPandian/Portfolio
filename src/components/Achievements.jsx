import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import CountUp from 'react-countup'

const achievements = [
  
  'Patent Published – Sync Screen to Sight',
  'Journal Published(KRONIKA) - Cipher Switch SecureChat(2026, VOLUME 26 ISSUE 5)',
]

const counters = [{ end: 2, suffix: '+', label: 'Research & Development' }]

export default function Achievements() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="achievements" ref={ref} className="section-padding section-tone-wisteria">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label section-label-light">Highlights</p>
          <h2 className="section-title section-title-light">
            <span className="text-gradient-light">Research & Development</span>
          </h2>
        </motion.div>
        <div className="mb-12 flex flex-wrap justify-center gap-8">
          {counters.map(({ end, suffix, label }) => (
            <motion.div
              key={label}
              className="glass-cream px-8 py-6 text-center transition hover:glow-cream"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="text-3xl font-bold text-[#c69fd5] md:text-4xl">
                <CountUp end={end} suffix={suffix} duration={2} enableScrollSpy scrollSpyOnce />
              </div>
              <div className="mt-1 text-sm font-medium text-[#c69fd5]/75">{label}</div>
            </motion.div>
          ))}
        </div>
        <ul className="space-y-4">
          {achievements.map((item, i) => (
            <motion.li
              key={item}
              className="glass-cream flex items-center gap-4 px-6 py-4 transition hover:glow-cream"
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: 0.1 * i }}
            >
              <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#c69fd5] text-sm font-bold text-[#fcfdc8]">
                {i + 1}
              </span>
              <span className="font-medium text-[#c69fd5]">{item}</span>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}

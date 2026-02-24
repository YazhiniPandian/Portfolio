import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  {
    title: 'Languages',
    items: ['Python', 'Java', 'C'],
  },
  {
    title: 'Web',
    items: ['HTML', 'CSS', 'PHP', 'MySQL'],
  },
  {
    title: 'Domains',
    items: ['Web Development', 'AI & Data Analytics'],
  },
  {
    title: 'Soft Skills',
    items: ['Adaptability', 'Teamwork', 'Self-Motivation'],
  },
]

function SkillBar({ name, level = 85 }) {
  return (
    <div className="group">
      <div className="mb-1 flex justify-between text-sm">
        <span className="text-gray-300 group-hover:text-[#00d4ff] transition">{name}</span>
        <span className="text-gray-500">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7]"
          initial={{ width: 0 }}
          whileInView={{ width: `${level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        />
      </div>
    </div>
  )
}

export default function Skills() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="skills" ref={ref} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Skills</span>
        </motion.h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="glass rounded-2xl p-6 transition hover:border-[#00d4ff]/30 hover:shadow-[0_0_30px_rgba(0,212,255,0.1)]"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-[#00d4ff]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-[#00d4ff]/30 bg-[#00d4ff]/5 px-3 py-1.5 text-sm text-gray-300 transition hover:border-[#00d4ff]/50 hover:bg-[#00d4ff]/10 hover:text-[#00d4ff]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        {/* Animated skill bars row */}
        <motion.div
          className="mt-10 glass rounded-2xl p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-[#a855f7]">Proficiency</h3>
          <div className="space-y-4">
            {['Python', 'Java', 'React', 'MySQL'].map((name, i) => (
              <SkillBar key={name} name={name} level={75 + (i % 3) * 5} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

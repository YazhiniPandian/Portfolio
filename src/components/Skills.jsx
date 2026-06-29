import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'

const skillGroups = [
  { title: 'Languages', items: ['Python', 'Java', 'C'] },
  { title: 'Web', items: ['HTML', 'CSS', 'PHP', 'MySQL'] },
  { title: 'Domains', items: ['Web Development', 'AI & Data Analytics'] },
  { title: 'Soft Skills', items: ['Adaptability', 'Teamwork', 'Self-Motivation'] },
]

function SkillBar({ name, level = 85 }) {
  return (
    <div className="group">
      <div className="mb-1 flex justify-between text-sm">
        <span className="font-medium text-body-light transition group-hover:text-white">{name}</span>
        <span className="text-body-muted-light">{level}%</span>
      </div>
      <div className="h-2 overflow-hidden rounded-full bg-white/20">
        <motion.div
          className="h-full rounded-full bg-gradient-to-r from-[#fcfdc8] to-[#ffffff]"
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
    <section id="skills" ref={ref} className="section-padding section-tone-wisteria">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label section-label-light">Expertise</p>
          <h2 className="section-title section-title-light">
            <span className="text-gradient-light">Skills</span>
          </h2>
        </motion.div>
        <div className="grid gap-8 md:grid-cols-2">
          {skillGroups.map((group, i) => (
            <motion.div
              key={group.title}
              className="glass-wisteria glass-reflection p-6 transition hover:glow-wisteria"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <h3 className="mb-4 text-lg font-semibold text-[#fcfdc8]">{group.title}</h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-xl border border-white/30 bg-white/15 px-3 py-1.5 text-sm font-medium text-[#fcfdc8] transition hover:bg-white/25"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
        <motion.div
          className="glass-wisteria glass-reflection mt-10 p-6"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.4 }}
        >
          <h3 className="mb-4 text-center text-lg font-semibold text-[#fcfdc8]">Proficiency</h3>
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

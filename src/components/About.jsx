import { useRef, useEffect } from 'react'
import { motion, useInView } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const text =
  'Computer Science Engineering student with strong foundational knowledge in Python, Java, and C. Passionate about cybersecurity, web development, and AI-driven solutions. Committed to innovation, problem-solving, and continuous learning.'

export default function About() {
  const sectionRef = useRef(null)
  const cardRef = useRef(null)
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 })

  useEffect(() => {
    if (!cardRef.current) return
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: { trigger: sectionRef.current, start: 'top 75%' },
      }
    )
  }, [])

  return (
    <section id="about" ref={sectionRef} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">About</span> Me
        </motion.h2>
        <motion.div
          ref={cardRef}
          className="glass-strong rounded-2xl p-8 shadow-xl transition hover:shadow-[0_0_40px_rgba(0,212,255,0.15)] md:p-10"
          whileHover={{ scale: 1.01 }}
        >
          <p className="text-center text-lg leading-relaxed text-gray-300">{text}</p>
          <p className="mt-6 text-center text-sm text-gray-500">
            CGPA: <span className="font-semibold text-[#00d4ff]">8.37</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

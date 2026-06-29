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
    <section id="about" ref={sectionRef} className="section-padding section-tone-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Introduction</p>
          <h2 className="section-title">
            <span className="text-gradient">About</span> Me
          </h2>
        </motion.div>
        <motion.div
          ref={cardRef}
          className="glass-cream glass-reflection p-8 transition hover:glow-cream md:p-12"
          whileHover={{ scale: 1.008 }}
        >
          <p className="text-center text-lg leading-relaxed text-body-dark">{text}</p>
          <p className="mt-8 text-center text-sm text-body-muted-dark">
            CGPA: <span className="font-bold text-[#c69fd5]">8.4</span>
          </p>
        </motion.div>
      </div>
    </section>
  )
}

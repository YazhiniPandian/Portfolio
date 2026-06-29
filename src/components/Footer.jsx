import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="glass-cream border-t border-white/40 py-10">
      <motion.div
        className="mx-auto max-w-6xl px-4 text-center"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm font-medium text-[#c69fd5]">
          © {new Date().getFullYear()} Abhi Yazhini P. All rights reserved.
        </p>
        <p className="mt-2 text-xs text-[#c69fd5]/75">
          Securing Systems. Building Intelligent Solutions.
        </p>
      </motion.div>
    </footer>
  )
}

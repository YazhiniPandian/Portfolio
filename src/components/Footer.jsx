import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'

export default function Footer() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <footer ref={ref} className="border-t border-white/5 bg-[#0a0a0f] py-8">
      <motion.div
        className="mx-auto max-w-6xl px-4 text-center text-gray-500"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm">
          © {new Date().getFullYear()} Abhi Yazhini P. All rights reserved.
        </p>
        <p className="mt-1 text-xs text-gray-600">
          Securing Systems. Building Intelligent Solutions.
        </p>
      </motion.div>
    </footer>
  )
}

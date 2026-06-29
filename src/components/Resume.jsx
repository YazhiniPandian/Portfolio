import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaDownload, FaFileAlt, FaExternalLinkAlt } from 'react-icons/fa'

/** Place your resume at: public/resume.pdf */
export const RESUME_PATH = '/resume.pdf'

export default function Resume() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  return (
    <section id="resume" ref={ref} className="section-padding section-tone-cream">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-10 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label">Career document</p>
          <h2 className="section-title">
            My <span className="text-gradient">Resume</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-sm text-[#5e4070]">
            Add your PDF as{' '}
            <code className="rounded bg-[#7a5890]/12 px-1.5 py-0.5 text-[#5e4070]">public/resume.pdf</code>
          </p>
        </motion.div>

        <motion.div
          className="glass-wisteria glass-reflection overflow-hidden glow-wisteria"
          initial={{ opacity: 0, y: 24 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="flex flex-col items-center justify-between gap-4 border-b border-[#fcfdc8]/10 px-6 py-5 sm:flex-row">
            <div className="flex items-center gap-3">
              <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#a878b8]/30 text-xl text-[#fcfdc8]">
                <FaFileAlt />
              </span>
              <div className="text-left">
                <p className="font-semibold text-[#fcfdc8]">Abhi Yazhini P — Resume</p>
                <p className="text-sm text-[#c69fd5]/80">PDF format</p>
              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              <a
                href={RESUME_PATH}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[#c69fd5]/40 px-5 py-2.5 text-sm font-medium text-[#fcfdc8] transition hover:bg-[#c69fd5]/10"
              >
                <FaExternalLinkAlt /> Open
              </a>
              <a
                href={RESUME_PATH}
                download="Abhi_Yazhini_P_Resume.pdf"
                className="btn-primary inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold shadow-md transition hover:shadow-[0_0_24px_rgba(198,159,213,0.45)]"
              >
                <FaDownload /> Download
              </a>
            </div>
          </div>

          <div className="relative h-[min(70vh,600px)] w-full bg-[#5e4070]">
            <iframe
              title="Resume preview"
              src={`${RESUME_PATH}#toolbar=0&navpanes=0`}
              className="h-full w-full border-0"
            />
            <p className="pointer-events-none absolute bottom-3 left-0 right-0 text-center text-xs text-[#c69fd5]/50">
              If preview is empty, add your file to public/resume.pdf and refresh.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

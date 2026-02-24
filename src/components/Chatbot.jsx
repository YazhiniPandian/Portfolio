import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiChat, HiX } from 'react-icons/hi'

const responses = {
  skills:
    'I work with Python, Java, C, and web technologies like HTML, CSS, PHP, MySQL. My domains include Cybersecurity, Web Development, and AI & Data Analytics. I also value soft skills like Adaptability, Teamwork, and Self-Motivation.',
  projects:
    'I have built several projects: House Rental System (Java + Swing), Crime File Management System (PHP + MySQL), Sync Screen to Sight (Patent Applied), College Event Management System, and SIH 2025 – AI-Driven Train Induction Planning & Scheduling System.',
  internship:
    'I was a Frontend Developer Intern at Yaazh Tech Pvt Ltd, working on a Bank Management System. I used React.js, Spring Boot, Node.js, MySQL, AWS basics, Postman, IntelliJ, Maven, and Git.',
  sih: 'SIH 2025 is my Smart India Hackathon project: an AI-Driven Train Induction Planning & Scheduling System. It focuses on intelligent planning and scheduling for train induction.',
  patent:
    'Sync Screen to Sight is an Eye Comfort Reader App for which I have applied for a patent. It is designed to reduce eye strain and improve reading comfort.',
  certifications:
    'I hold certifications in HTML, C, Microsoft Office, Coursera courses (Data Visualization, Business Analysis and Process Management), and NPTEL Industrial 4.0 with 82%.',
  contact:
    'You can reach me at: Phone +91 9952129933, Email abhiyazhini22@gmail.com, LinkedIn linkedin.com/in/abhi-yazhini-p-453083320. Or use the contact form on this site!',
  default:
    "I can tell you about my Skills, Projects, Internship, SIH Project, Patent, Certifications, or Contact. Just type one of these keywords!",
}

function getReply(input) {
  const lower = input.toLowerCase().trim()
  if (lower.includes('skill')) return responses.skills
  if (lower.includes('project')) return responses.projects
  if (lower.includes('intern')) return responses.internship
  if (lower.includes('sih') || lower.includes('hackathon')) return responses.sih
  if (lower.includes('patent')) return responses.patent
  if (lower.includes('certif')) return responses.certifications
  if (lower.includes('contact') || lower.includes('email') || lower.includes('phone'))
    return responses.contact
  return responses.default
}

export default function Chatbot() {
  const [open, setOpen] = useState(false)
  const [messages, setMessages] = useState([
    { role: 'bot', text: "Hi! I'm Abhi's portfolio assistant. Ask about Skills, Projects, Internship, SIH, Patent, Certifications, or Contact." },
  ])
  const [input, setInput] = useState('')
  const bottomRef = useRef(null)

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages])

  const send = () => {
    if (!input.trim()) return
    const userMsg = { role: 'user', text: input }
    setMessages((m) => [...m, userMsg])
    setInput('')
    setTimeout(() => {
      setMessages((m) => [...m, { role: 'bot', text: getReply(userMsg.text) }])
    }, 400)
  }

  return (
    <>
      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed bottom-24 right-6 z-50 w-full max-w-sm overflow-hidden rounded-2xl glass-strong shadow-2xl"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: 'tween', duration: 0.2 }}
          >
            <div className="flex items-center justify-between border-b border-white/10 px-4 py-3">
              <span className="font-semibold text-white">Ask about me</span>
              <button
                type="button"
                className="rounded p-1.5 text-gray-400 hover:bg-white/10 hover:text-white"
                onClick={() => setOpen(false)}
                aria-label="Close chat"
              >
                <HiX size={20} />
              </button>
            </div>
            <div className="flex h-72 flex-col overflow-y-auto p-4">
              {messages.map((msg, i) => (
                <div
                  key={i}
                  className={`mb-3 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <span
                    className={`max-w-[85%] rounded-2xl px-4 py-2 text-sm ${
                      msg.role === 'user'
                        ? 'bg-[#00d4ff]/20 text-white'
                        : 'bg-white/10 text-gray-200'
                    }`}
                  >
                    {msg.text}
                  </span>
                </div>
              ))}
              <div ref={bottomRef} />
            </div>
            <div className="flex gap-2 border-t border-white/10 p-3">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && send()}
                placeholder="Type a keyword..."
                className="flex-1 rounded-xl border border-white/10 bg-white/5 px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-[#00d4ff]/50"
              />
              <button
                type="button"
                onClick={send}
                className="rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] px-4 py-2.5 text-sm font-medium text-white transition hover:opacity-90"
              >
                Send
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <motion.button
        type="button"
        className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-r from-[#00d4ff] to-[#a855f7] text-white shadow-lg transition hover:shadow-[0_0_30px_rgba(0,212,255,0.5)]"
        onClick={() => setOpen((o) => !o)}
        aria-label={open ? 'Close chatbot' : 'Open chatbot'}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        {open ? <HiX size={24} /> : <HiChat size={24} />}
      </motion.button>
    </>
  )
}

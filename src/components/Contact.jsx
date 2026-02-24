import { useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { FaPhone, FaEnvelope, FaLinkedin } from 'react-icons/fa'
import emailjs from '@emailjs/browser'

const contactInfo = [
  { Icon: FaPhone, label: 'Phone', value: '+91 9952129933', href: 'tel:+919952129933' },
  {
    Icon: FaEnvelope,
    label: 'Email',
    value: 'abhiyazhini22@gmail.com',
    href: 'mailto:abhiyazhini22@gmail.com',
  },
  {
    Icon: FaLinkedin,
    label: 'LinkedIn',
    value: 'linkedin.com/in/abhi-yazhini-p-453083320',
    href: 'https://linkedin.com/in/abhi-yazhini-p-453083320',
  },
]

// Replace with your EmailJS keys (user must set in env or here)
const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID || 'your_service_id'
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID || 'your_template_id'
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY || 'your_public_key'

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!validate()) return
    setStatus('sending')
    emailjs
      .send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, {
        from_name: form.name,
        from_email: form.email,
        message: form.message,
        to_email: 'abhiyazhini22@gmail.com',
      }, EMAILJS_PUBLIC_KEY)
      .then(() => {
        setStatus('success')
        setForm({ name: '', email: '', message: '' })
        setErrors({})
      })
      .catch(() => setStatus('error'))
  }

  return (
    <section id="contact" ref={ref} className="section-padding bg-gradient-mesh">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.h2
          className="mb-12 text-center text-3xl font-bold text-white md:text-4xl"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="text-gradient">Contact</span> Me
        </motion.h2>
        <div className="grid gap-10 lg:grid-cols-2">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {contactInfo.map(({ Icon, label, value, href }) => (
              <a
                key={label}
                href={href}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="glass flex items-center gap-4 rounded-xl p-4 transition hover:border-[#00d4ff]/40 hover:shadow-[0_0_25px_rgba(0,212,255,0.15)]"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                  <Icon />
                </span>
                <div>
                  <div className="text-sm text-gray-500">{label}</div>
                  <div className="font-medium text-white">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <form onSubmit={handleSubmit} className="glass rounded-2xl p-6">
              <div className="mb-4">
                <label htmlFor="name" className="mb-1 block text-sm text-gray-400">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#00d4ff]/50"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-400">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm text-gray-400">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                  className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#00d4ff]/50"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-400">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1 block text-sm text-gray-400">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                  className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white outline-none focus:border-[#00d4ff]/50"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-400">{errors.message}</p>
                )}
              </div>
              {status === 'success' && (
                <motion.p
                  className="mb-4 text-center text-green-400"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <p className="mb-4 text-center text-red-400">
                  Failed to send. Check EmailJS config or try again.
                </p>
              )}
              <button
                type="submit"
                disabled={status === 'sending'}
                className="w-full rounded-xl bg-gradient-to-r from-[#00d4ff] to-[#a855f7] py-3 font-semibold text-white transition hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] disabled:opacity-70"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

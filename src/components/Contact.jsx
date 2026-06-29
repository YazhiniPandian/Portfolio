import { useState, useRef, useEffect } from 'react'
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
    value: 'linkedin.com/in/abhiyazhinip2226',
    href: 'https://www.linkedin.com/in/abhiyazhinip2226/',
  },
]

const EMAILJS_SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID ?? ''
const EMAILJS_TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID ?? ''
const EMAILJS_PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY ?? ''

const PLACEHOLDER_VALUES = new Set([
  '',
  'your_service_id',
  'your_template_id',
  'your_public_key',
])

function isEmailJsConfigured() {
  return (
    !PLACEHOLDER_VALUES.has(EMAILJS_SERVICE_ID) &&
    !PLACEHOLDER_VALUES.has(EMAILJS_TEMPLATE_ID) &&
    !PLACEHOLDER_VALUES.has(EMAILJS_PUBLIC_KEY)
  )
}

function buildMailtoLink({ name, email, message }) {
  const subject = encodeURIComponent(`Portfolio contact from ${name}`)
  const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`)
  return `mailto:abhiyazhini22@gmail.com?subject=${subject}&body=${body}`
}

export default function Contact() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // idle | sending | success | error
  const [errorDetail, setErrorDetail] = useState('')

  const emailJsReady = isEmailJsConfigured()

  useEffect(() => {
    if (emailJsReady) {
      emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY })
    }
  }, [emailJsReady])

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Invalid email'
    if (!form.message.trim()) e.message = 'Message is required'
    setErrors(e)
    return Object.keys(e).length === 0
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!validate()) return

    if (!emailJsReady) {
      setStatus('error')
      setErrorDetail(
        'EmailJS is not set up. Create a .env file (see .env.example) with your keys, then restart npm run dev.'
      )
      return
    }

    setStatus('sending')
    setErrorDetail('')

    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          from_email: form.email,
          reply_to: form.email,
          message: form.message,
          to_email: 'abhiyazhini22@gmail.com',
        },
        { publicKey: EMAILJS_PUBLIC_KEY }
      )
      setStatus('success')
      setForm({ name: '', email: '', message: '' })
      setErrors({})
    } catch (err) {
      console.error('EmailJS error:', err)
      setStatus('error')
      const text = err?.text || err?.message || 'Unknown error'
      setErrorDetail(
        `Send failed (${text}). Check that template variables match: from_name, from_email, reply_to, message.`
      )
    }
  }

  const openMailto = () => {
    if (!validate()) return
    window.location.href = buildMailtoLink(form)
  }

  return (
    <section id="contact" ref={ref} className="section-padding section-tone-wisteria">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <p className="section-label section-label-light">Get in touch</p>
          <h2 className="section-title section-title-light">
            <span className="text-gradient-light">Contact</span> Me
          </h2>
        </motion.div>
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
                className="glass-cream flex items-center gap-4 p-5 transition hover:glow-cream"
              >
                <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#c69fd5]/15 text-[#c69fd5]">
                  <Icon />
                </span>
                <div>
                  <div className="text-sm font-medium text-[#c69fd5]/75">{label}</div>
                  <div className="font-semibold text-[#c69fd5]">{value}</div>
                </div>
              </a>
            ))}
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            {!emailJsReady && (
              <p className="mb-4 rounded-xl border border-white/30 bg-white/15 px-4 py-3 text-sm text-[#fcfdc8]">
                Form email needs EmailJS keys in a <code className="text-[#fcfdc8]">.env</code> file.
                You can still use <strong>Send via Email App</strong> below.
              </p>
            )}
            <form onSubmit={handleSubmit} className="glass-cream p-7">
              <div className="mb-4">
                <label htmlFor="name" className="mb-1 block text-sm font-medium text-[#c69fd5]">
                  Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={form.name}
                  onChange={(ev) => setForm((f) => ({ ...f, name: ev.target.value }))}
                  className="w-full rounded-xl border border-[#c69fd5]/25 bg-[#fcfdc8]/60 px-4 py-3 text-[#c69fd5] outline-none focus:border-[#c69fd5]/50"
                  placeholder="Your name"
                />
                {errors.name && <p className="mt-1 text-sm text-red-600">{errors.name}</p>}
              </div>
              <div className="mb-4">
                <label htmlFor="email" className="mb-1 block text-sm font-medium text-[#c69fd5]">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={form.email}
                  onChange={(ev) => setForm((f) => ({ ...f, email: ev.target.value }))}
                  className="w-full rounded-xl border border-[#c69fd5]/25 bg-[#fcfdc8]/60 px-4 py-3 text-[#c69fd5] outline-none focus:border-[#c69fd5]/50"
                  placeholder="your@email.com"
                />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>
              <div className="mb-6">
                <label htmlFor="message" className="mb-1 block text-sm font-medium text-[#c69fd5]">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={4}
                  value={form.message}
                  onChange={(ev) => setForm((f) => ({ ...f, message: ev.target.value }))}
                  className="w-full resize-none rounded-xl border border-[#c69fd5]/25 bg-[#fcfdc8]/60 px-4 py-3 text-[#c69fd5] outline-none focus:border-[#c69fd5]/50"
                  placeholder="Your message"
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message}</p>
                )}
              </div>
              {status === 'success' && (
                <motion.p
                  className="mb-4 text-center font-medium text-green-700"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                >
                  Message sent successfully!
                </motion.p>
              )}
              {status === 'error' && (
                <div className="mb-4 space-y-2 text-center text-sm text-red-600">
                  <p>Failed to send.</p>
                  {errorDetail && <p>{errorDetail}</p>}
                </div>
              )}
              <button
                type="submit"
                disabled={status === 'sending' || !emailJsReady}
                className="btn-primary mb-3 w-full py-3 font-semibold disabled:cursor-not-allowed disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </button>
              <button
                type="button"
                onClick={openMailto}
                className="w-full rounded-xl border border-[#c69fd5]/30 py-3 text-sm font-semibold text-[#c69fd5] transition hover:bg-[#c69fd5]/10"
              >
                Send via Email App (Gmail / Outlook)
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

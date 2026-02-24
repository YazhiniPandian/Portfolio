# Abhi Yazhini P – Portfolio

Production-ready developer portfolio with dark theme, neon blue/purple accents, glassmorphism, and smooth animations.

## Tech Stack

- React 19 + Vite 7
- Tailwind CSS v4
- Framer Motion
- GSAP + ScrollTrigger
- Three.js (particle background)
- React Icons, React CountUp, Typed.js, React Parallax Tilt
- EmailJS (contact form)
- GitHub REST API (live repos)

## Setup

```bash
npm install
npm run dev
```

## Environment (Contact Form)

Create `.env` from `.env.example` and add your [EmailJS](https://www.emailjs.com/) keys:

- `VITE_EMAILJS_SERVICE_ID`
- `VITE_EMAILJS_TEMPLATE_ID`
- `VITE_EMAILJS_PUBLIC_KEY`

In your EmailJS template, use variables such as `{{from_name}}`, `{{from_email}}`, `{{message}}` to match the form fields.

## Build

```bash
npm run build
npm run preview
```

## Structure

- `src/components/` – Hero, About, Skills, Internship, Projects, Achievements, Certifications, GitHubRepos, Chatbot, Contact, Footer, Navbar, LoadingScreen, ParticleBackground
- `src/App.jsx` – Main app with loading state and section composition
- `src/index.css` – Tailwind import and theme (glass, gradient, glow utilities)

## Design

- Dark theme with animated gradient mesh background
- Neon blue (`#00d4ff`) and purple (`#a855f7`) accents
- Glassmorphism cards and navbar
- Scroll-triggered reveals (GSAP + Framer Motion)
- 3D tilt project cards, typing hero, floating tech icons

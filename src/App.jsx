import { useState, useEffect } from 'react'
import { AnimatePresence } from 'framer-motion'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import LoadingScreen from './components/LoadingScreen'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

// Register GSAP ScrollTrigger for scroll-driven animations
gsap.registerPlugin(ScrollTrigger)

function App() {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence mode="wait">
        <LoadingScreen
          isLoading={isLoading}
          onComplete={() => {}}
        />
      </AnimatePresence>
      {!isLoading && (
        <>
          <Navbar />
          <main>
            <Hero />
            <About />
            <Skills />
            <Internship />
            <Projects />
            <Achievements />
            <Certifications />
            <GitHubRepos />
            <Contact />
            <Footer />
          </main>
          <Chatbot />
        </>
      )}
    </>
  )
}

export default App

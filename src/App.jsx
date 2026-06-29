import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import AmbientBackground from './components/AmbientBackground'
import CursorEffects from './components/CursorEffects'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Internship from './components/Internship'
import Projects from './components/Projects'
import Achievements from './components/Achievements'
import Certifications from './components/Certifications'
import GitHubRepos from './components/GitHubRepos'
import Resume from './components/Resume'
import Contact from './components/Contact'
import Footer from './components/Footer'
import Chatbot from './components/Chatbot'

gsap.registerPlugin(ScrollTrigger)

function App() {
  return (
    <>
      <AmbientBackground />
      <CursorEffects />
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
        <Resume />
        <Contact />
        <Footer />
      </main>
      <Chatbot />
    </>
  )
}

export default App

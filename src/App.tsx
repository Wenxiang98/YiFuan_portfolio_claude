import Hero from '@/components/Hero'
import About from '@/components/About'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import PresentationDesign from '@/components/PresentationDesign'
import VideoDesign from '@/components/VideoDesign'
import Contact from '@/components/Contact'
import Navbar from '@/components/Navbar'

function App() {
  return (
    <div className="min-h-screen bg-cream text-gray-900">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <PresentationDesign />
        <VideoDesign />
        <Skills />
        <Contact />
      </main>
      <footer className="bg-navy border-t border-navy-light text-center py-8">
        <p className="text-sm text-grey-muted">
          © {new Date().getFullYear()} Chew Yi Fuan · Kuala Lumpur, Malaysia
        </p>
      </footer>
    </div>
  )
}

export default App

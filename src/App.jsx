import './App.css'
import './index.css'
import About from './components/About'
import Contact from './components/Contact'
import Experiences from './components/Express'
import Hero from './components/Hero'
import NavBar from './components/NavBar'
import Projects from './components/Projects'
import Technology from './components/Technology'
import Tools from './components/Tools'
import { useEffect } from 'react'
import Lenis from 'lenis'

function App() {
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.4,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smooth: true,
    })

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.destroy()
    }
  }, [])

  return (
    <div className='overflow-x-hidden text-[#f1f0ff] antialiased relative'>
      {/* Animated Background — reduced opacity for text readability */}
      <div className='fixed inset-0 -z-10 overflow-hidden'>
        {/* Base dark background with slight blue tint */}
        <div className='absolute inset-0 bg-[#050508]' />

        {/* Aurora blobs — reduced opacity to not overpower text */}
        <div className='blob-1 absolute top-[-20%] left-[-10%] w-[500px] h-[500px] rounded-full opacity-[0.12]'
          style={{ background: 'radial-gradient(circle, #7c3aed 0%, #4f46e5 40%, transparent 70%)' }}
        />
        <div className='blob-2 absolute top-[40%] right-[-15%] w-[400px] h-[400px] rounded-full opacity-[0.08]'
          style={{ background: 'radial-gradient(circle, #06b6d4 0%, #0891b2 40%, transparent 70%)' }}
        />
        <div className='blob-3 absolute bottom-[-10%] left-[30%] w-[350px] h-[350px] rounded-full opacity-[0.07]'
          style={{ background: 'radial-gradient(circle, #ec4899 0%, #9333ea 40%, transparent 70%)' }}
        />

        {/* Dot grid — reduced opacity */}
        <div className='absolute inset-0 dot-grid opacity-30' />

        {/* Subtle top gradient for hero */}
        <div className='absolute inset-0' style={{
          background: 'radial-gradient(ellipse 80% 50% at 50% -5%, rgba(124, 58, 237, 0.08), transparent)'
        }} />
      </div>

      <NavBar />
      <main className='container mx-auto px-5 sm:px-6 md:px-8 lg:px-12 max-w-7xl'>
        <Hero />
        <About />
        <Technology />
        <Tools />
        <Experiences />
        <Projects />
        <Contact />
      </main>
    </div>
  )
}

export default App

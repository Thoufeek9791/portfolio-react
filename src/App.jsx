
import './App.css'
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
      duration: 1.2,
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
   <div className='overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900'>
    <div className='fixed top-0 -z-10 h-full w-full'>
      <div className="absolute top-0 z-[-2] h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]"></div>
    </div>
    <NavBar/>
    <div className="container mx-auto px-8">
    <Hero/>
    <About/>
    <Technology/>
    <Tools/>
    <Experiences/>
    <Projects/>
    <Contact/>
   </div>
  </div>
  )
}

export default App

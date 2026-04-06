import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Header from './components/Header'
import Skills from './components/Skills'
import About from './components/About'
import Work from './components/Work'
import Projects from './components/Projects'
import Footer from './components/Footer'
import { Analytics } from "@vercel/analytics/react"

function App() {
  const [darkMode, setDarkMode] = useState(true)
  const [isMenu, setIsMenu] = useState(true)

  const toggleTheme = ()=>{
    setDarkMode((prev)=> !prev)
  }

  const toggleMenu = ()=>{
    setIsMenu((prev)=> !prev)
  }

  return (
    <main className={`${darkMode && "dark"} relative`}>
      <Navbar 
        darkMode={darkMode}
        isMenu={isMenu}
        toggleTheme={toggleTheme}
        toggleMenu={toggleMenu}
      />

      <div className='bg-white relative dark:bg-[#05174e]'>
        <div className='px-5 md:px-15 pt-40 py-6' id='home'>
          <Header />
        </div>
      </div>

      <section className='px-0 md:px-15 py-20 bg-[radial-gradient(ellipse_at_top_left,#030a1c,#05174e)]'>
        <Skills />
      </section>

      <section className='px-5 md:px-15 py-20 bg-white dark:bg-[#05174e]' id='about'>
        <About />
      </section>

      <section className='px-5 md:px-15 py-20 bg-white dark:bg-[#030f31] border-t border-slate-200 dark:border-0 shadow-lg'>
        <Work />
      </section>

      <section className='px-5 md:px-15 py-20 bg-white dark:bg-[#05174e] border-t border-slate-200 dark:border-0 shadow-lg' id='project'>
        <Projects />
      </section>

      <section className='px-5 md:px-15 py-20 bg-[#030f31] border-t border-slate-200 dark:border-0 shadow-lg'>
        <Footer />
      </section>

      <Analytics />
    </main>
  )
}

export default App
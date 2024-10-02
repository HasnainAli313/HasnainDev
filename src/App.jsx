import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Aboutme from './components/Aboutme'
import Skills from './components/Skills'
import Experience from './components/Experience'
import Work from './components/Work'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react'
import Certification from './components/Certification'


function App() {
  useEffect(()=>{
    AOS.init({duration:1000})
  },[])

  return (
    <>
     <Navbar/>
     <Hero/>
     <Aboutme/>
     <Skills/>
     <Experience/>
     <Certification/>
     <Work/>
     <Testimonials/>
     <Contact/>
     <Footer/>
    </>
  )
}

export default App
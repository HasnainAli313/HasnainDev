import  { useState } from 'react'

function Navbar() {

const [isOpen, setIsOpen] = useState(false);
const [activeLink, setActiveLink] = useState("#home");

const toggleMenu = () => {
    setIsOpen(!isOpen);
}
const handleActive = (link) => {
    setActiveLink(link);
}
console.log(activeLink);
  return (
    
   <nav  id='home' className='flex z-10 flex-wrap sticky top-0 bg-[#0A0F1B]  justify-between p-2'>
    <h1 className='text-xl font-semibold'>&lt;Hasnain Ali/&gt;</h1>
    <ul  className={`menu flex text-gray-300 flex-wrap gap-5 font-semibold  ${isOpen ? 'open' : ''} `}>
        <li className={`hover:text-gray-100 ${activeLink === "#home" ? 'underline' : '' }`}>
            <a onClick={() => handleActive("#home")} href='#home'>Home</a>
        </li>
        <li className={ `hover:text-gray-100  ${activeLink === "#about" ? 'underline' : ''} `}>
            <a onClick={() => handleActive("#about")} href='#about'>About</a>
        </li>
        <li className={` hover:text-gray-100  ${activeLink === "#work" ? 'underline' : ''} `}>
            <a onClick={() => handleActive("#work")} href="#work">Work</a>
        </li>
        <li className= {`hover:text-gray-100  ${activeLink === "#testimonial" ? 'underline' : ''}`}>
            <a onClick={() => handleActive("#testimonial")} href='#testimonial'>Testimonials</a>
        </li>
        <li className={`hover:text-gray-100 ${activeLink === "#contact" ? 'underline' : ''}`}>
            <a onClick={() => handleActive("#contact")} href='#contact'>Contact</a>
        </li>
        <li className=' '>
            <button className='bg-gray-200 hover:bg-gray-100  text-black p-1  rounded-xl'  >Download CV</button>
        </li>
    </ul>
    <button className='hamburger md:hidden' onClick={toggleMenu}>&#9776;</button>
   </nav>
  )
}

export default Navbar
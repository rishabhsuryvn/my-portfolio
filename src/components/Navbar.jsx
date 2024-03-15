import React, { useState } from 'react'
import Logo from '../assets/logo.png'
import {FaBars, FaTimes, FaGithub, FaLinkedin, FaFacebook} from 'react-icons/fa'
import {HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs'
import {Link} from 'react-scroll'

const Navbar = () => {
   const [nav, setNav] = useState(false)

   const handleClick = ()=> setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
     <div><img src={Logo} alt='Logo Image' style={{ width: '30px' }} /></div> 
     
    
     
        <ul className='hidden md:flex'>
            <li>
             <Link className='hover:underline decoration-red-600' to='home' smooth={true} duration={500}>Home</Link>
             </li>
            <li>
            <Link  className='hover:underline decoration-red-600'  to='about' smooth={true} duration={500}>About</Link>
            </li>
            <li>
            <Link  className='hover:underline decoration-red-600'  to='skills' smooth={true} duration={500}>Skills</Link>
            </li>
            <li>
            <Link  className='hover:underline decoration-red-600'  to='work' smooth={true} duration={500}>Project</Link>
            </li>
            <li>
            <Link  className='hover:underline decoration-red-600'  to='contact' smooth={true} duration={500}>Contact </Link>
            </li>
        </ul>
     
      
   
     <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ? <FaBars/>: <FaTimes/>}
     </div>
   
   
   <ul className={!nav ? 'hidden': 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'}>
            <li className='py-6 text-4xl'>  
            <Link className='hover:text-red-200' onClick={handleClick} to='home' smooth={true} duration={500}>
            Home
          </Link>
          </li>
            <li className='py-6 text-4xl'> 
            <Link  className='hover:text-red-200'  onClick={handleClick} to='about' smooth={true} duration={500}>
            About
          </Link>
          </li>
            <li className='py-6 text-4xl'>
                <Link  className='hover:text-red-200'  onClick={handleClick} to='skills' smooth={true} duration={500}>
            Skills
          </Link>
          </li>
            <li className='py-6 text-4xl'>
            <Link  className='hover:text-red-200'  onClick={handleClick} to='work' smooth={true} duration={500}>
            Project
          </Link>
            </li>
            <li className='py-6 text-4xl'>
            <Link  className='hover:text-red-200'  onClick={handleClick} to='contact' smooth={true} duration={500}>
            Contact
          </Link>
            </li>
        </ul>
   

    
      <div className=' hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-500'>
                <a href="https://www.linkedin.com/in/rishabh-suryavanshi-042175229/" className='flex justify-between items-center w-full text-gray-300'>
                    LinekdIn <FaLinkedin size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                <a href="https://github.com/rishabhsuryvn" className='flex justify-between items-center w-full text-gray-300'>
                    Github <FaGithub size={30}/>
                </a>
            </li>
            <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]'>
                <a href="mailto:rishabhsuryvanshi2@gmail.com" className='flex justify-between items-center w-full text-gray-300'>
                    Email <HiOutlineMail size={30}/>
                </a>
            </li>
        </ul>
      </div>

    </div>
  )
}

export default Navbar
 
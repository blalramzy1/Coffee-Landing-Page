"use client"
import Link from 'next/link'
import React, { useState } from 'react'
import { AnimatePresence } from "framer-motion"
import NavBar from './Nav/NavBar'
import Image from 'next/image'
import Logo from "../public/assets/logo.svg"


const Header = () => {
  const [navActivate, setnavActivate] = useState(false);
  return (
    <header className='absolute top-[48px] left-0 right-0 z-[60]'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          <Link 
          className='relative w-[100px] h-[40px] xl:w-[120px] xl:h-[40px] z-[60]' 
          href="/">
           <Image 
           className='object-contain' 
           fill 
           alt='header'
           src={Logo}/>
          </Link>
          <button onClick={() => setnavActivate(!navActivate)} className='w-8 h-6 text-[#A67B5B] relative flex items-center justify-center z-[60] outline-none'>
            {/* 1 */}
            <span className={`w-full h-[1.5px] bg-current bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActivate ? "top-1/2 rotate-45" : " top-0 translate-y-0"}`}></span>
            {/* 2 */}
            <span className={`w-full h-[1.5px] bg-current bg-current absolute left-0 transition-opacity duration-300 ${navActivate ? " opacity-0" : " top-1/2"}`}></span>
            {/* 3 */}
            <span className={`w-full h-[1.5px] bg-current bg-current absolute left-0 will-change-transform transition-transform duration-300 ${navActivate ? "top-1/2 -rotate-45" : " bottom-0 translate-y-0"}`}></span>
            </button>
        </div>
      </div>
      {/* Nav */}
      <AnimatePresence mode='wait'>{navActivate && <NavBar/>}</AnimatePresence>
    </header>
  )
}

export default Header
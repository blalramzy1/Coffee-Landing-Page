import React from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const links = [
  { href: "/", name: "Home" },
  { href: "/", name: "Explore" },
  { href: "/", name: "About" },
  { href: "/", name: "Menu" },
  { href: "/", name: "Contact" },
]

const letterAnim = {
  initial: {
    y: "100%",
    opacity: 0, 
  },
  enter: (i)=> ({
    y: 0,
    opacity: 1, 
    transition: { duration: 1, ease: [0.75, 0.23, 0.15, 1], delay: i[0] }, 
  }),
  exit: (i) => ({
    y: "100%",
    opacity: 0, 
    transition: { duration: 0.8, ease: [0.75, 0.23, 0.15, 1], delay: i[1] },
  }),
};

const getLetter = (name) => {
  return name.split("").map((letter, idx) => (
    <motion.span
      variants={letterAnim}
      initial="initial"
      animate="enter"
      custom={[idx * 0.04, (name.length - idx) * 0.01]}
      exit="exit"
      key={idx}>
      {letter}
    </motion.span>
  ));
}

const NavList = () => {
  return (
    <ul className='flex flex-col gap-8 font-primary text-4xl font-semibold text-[#A67B5B] items-center uppercase'>
      {links.map((link, idx) => (
        <li key={idx} className='flex overflow-hidden hover:text-white transition-all'>
          <Link href={link.href} passHref>
            <>{getLetter(link.name)}</>
          </Link>
        </li>
      ))}
    </ul>
  )
}

export default NavList

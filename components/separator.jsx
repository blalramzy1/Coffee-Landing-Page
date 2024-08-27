import Image from 'next/image'
import React from 'react'

const Separator = ({bg = "#A67B5B"}) => {
  const ImgSrc = bg === "#A67B5B" ? "/assets/separator-accent.svg" : "/assets/separator-white.svg"
  return (
    <div className=' relative w-[168px] h-[26px] mx-auto'>
      <Image src={ImgSrc} fill alt='sparator'/>
    </div>
  )
}

export default Separator
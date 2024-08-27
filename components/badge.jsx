import Image from 'next/image';
import React from 'react';
import BadgeImg from "../public/assets/badge.svg";

const Badge = ({ containerStyle }) => {
  return (
    <div className={`relative ${containerStyle}`} >
      <Image
        width={150} 
        height={150} 
        src={BadgeImg} 
        alt="Badge"
        className="object-contain" 
      />
    </div>
  );
};

export default Badge;

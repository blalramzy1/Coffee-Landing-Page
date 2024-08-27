import React from 'react';
import Separator from './separator';
import Badge from './badge';

const Hero = () => {
  return (
    <section className='h-[100vh] xl:h-screen relative text-white'>
      <div className='bg-hero_overlay absolute w-full h-full z-10 bg-primary/[0.93]'></div>
      <video autoPlay loop muted className='absolute top-0 left-0 w-full h-full object-cover'>
        <source src="/assets/hero/video.mp4" type='video/mp4'></source>
        Your browser does not support the video tag.
      </video>
      <div className='container mx-auto h-full flex flex-col xl:flex-row items-center z-30 relative'>
        <div className='flex-1 flex flex-col text-center justify-center items-center xl:pb-12 gap-10 h-full'>
          <div className='flex flex-col items-center'>
            <Badge containerStyle="xl:flex xl:w-[180px] xl:h-[180px] pb-3" />
            <h1 className='h1 text-white'>
              <span className='text-[#A67B5B]'>Coffee</span> & Joy
            </h1>
          </div>
          <Separator bg='white'/>
          <p className='lead font-light max-w-[300px] md:max-w-[430px] xl:max-w-[568px] mb-4'>
            Experience the joy of exceptional coffee in our cozy space, where every cup is crafted with passion and warmth
          </p>
          <button className='btn text-slate-400'>Our Menu</button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

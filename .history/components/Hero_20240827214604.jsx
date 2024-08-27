import React, { useEffect, useState } from 'react';
import Separator from './separator';
import LocomotiveScroll from 'locomotive-scroll';
import Badge from './badge';

const Hero = () => {
  const [isClient, setIsClient] = useState(false);
  const [scroll, setScroll] = useState(null);

  useEffect(() => {
    setIsClient(true);

    if (typeof window !== 'undefined') {
      const initializeScroll = () => {
        const scrollInstance = new LocomotiveScroll({
          el: document.querySelector('[data-scroll-container]'),
          smooth: true,
          smoothMobile: true,
          lerp: 0.1,
          reloadOnContextChange: true,
        });
        setScroll(scrollInstance);
      };

      const debounce = (func, wait) => {
        let timeout;
        return () => {
          clearTimeout(timeout);
          timeout = setTimeout(() => func(), wait);
        };
      };

      const handleResize = debounce(() => {
        if (scroll && typeof scroll.update === 'function') {
          scroll.update();
        }
      }, 100);

      initializeScroll();
      window.addEventListener('resize', handleResize);

      return () => {
        if (scroll && typeof scroll.destroy === 'function') {
          scroll.destroy();
        }
        window.removeEventListener('resize', handleResize);
      };
    }
  }, [scroll]);

  if (!isClient) return null;

  return (
    <section data-scroll-container className='h-[100vh] xl:h-screen relative text-white'>
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

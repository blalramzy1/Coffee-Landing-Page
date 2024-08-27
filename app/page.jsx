"use client"
import Image from "next/image";
import Hero from "@/components/Hero";
import { useEffect } from "react";
import Explore from "@/components/Explore";
import About from "@/components/About";
import Menu from "@/components/Menu";
import Testimonials from "@/components/Testimonials";
import OpeningHours from "@/components/OpeningHours";

export default function Home() {
  useEffect(() => {
    const loadLocomotiveScroll = async () => {
      const locomotiveScroll = (await import("locomotive-scroll")).default;
      new locomotiveScroll();
    }
  }, []);

  return (
    <div className="h-full overflow-x-hidden">
      <Hero/>
      <Explore/>
      <About/>
      <Menu/>
      <OpeningHours/>
      <Testimonials />
      {/* <div className="h-[4000px]"></div> */}
    </div>
  );
}

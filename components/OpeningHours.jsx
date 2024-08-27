import Image from "next/image"
import Separator from "./separator"
import img from "../public/assets/opening-hours/img.png"
import Badge from "./badge"

const OpeningHours = () => {
  return (
    <section className="flex bg-primary h-[60vh] lg:h-[80vh]">
        {/* 1 */}
        <div className="hidden relative lg:flex flex-1 justify-center items-center">
          <div className="w-full h-full absolute z-40 top-0 bg-black/60"></div>
            <Image 
            src="/assets/opening-hours/img.png"
             fill 
             alt="" 
             quality={100} 
             priority
             className="object-cover"
             />
             <Badge containerStyle="text-white" className="absolute z-50 text-white"/>
        </div>
        {/* 2 */}
        <div className="flex-1 bg-opening_hours bg-cover bg-no-repeat flex flex-col justify-center items-center relative">
        <div className="w-full h-full absolute z-10 top-0 bg-black/[0.85]"></div>
        <div className="z-20 flex flex-col items-center justify-center">
          <h2 className="h2 text-center text-white mb-4">Opening Hours</h2>
          <Separator bg="#A67B5B"/>
          <div className="mt-12 relative w-[300px] h-[220px] py-4 lg:w-[470px] lg:h-[280px]"> 
            <Image src="/assets/opening-hours/program-badge.svg" fill className=" object-contain" quality={100} priority alt=""/>
          </div>
        </div>
        </div>
    </section>
  )
}

export default OpeningHours

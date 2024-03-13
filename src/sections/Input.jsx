import React, { useEffect, useState } from 'react'
import Button from '../components/Buttons'

function Input() {
    const [isMobile, setIsMobile] = useState(false);

  //check mobile or not
  const checkMobile = () => {
    if (window.innerWidth <= 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  };
  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);
  return (
    <section className='px-4 py-20 flex flex-col lg:px-12'>
        <div className={`flex flex-col lg:flex-row p-8 lg:p-14 rounded-xl gap-4 bg-darkViolet ${isMobile ? "bg-input-bg-mobile bg-no-repeat bg-right-top" : "bg-input-bg-desktop bg-no-repeat object-contain bg-center bg-cover"} `}>
            <input type="text" className='p-4 lg:py-5 lg:px-8 rounded-lg placeholder:text-grayishViolet lg:w-[80%] lg:text-lg' placeholder='Shorten a link here...' />
            <Button label={"Shorten It!"} border={"rounded-lg text-white"}/>
        </div>
        <div className='flex flex-col p-8 gap-4'>
            <h3>htps://www.frontendmentor.io</h3>
            <a href="#" className='text-cyan font-medium'>https://rel.ink/k4lKyk</a>
            <Button label={"Copy"} border={"rounded-md text-white"}/>

        </div>
    </section>
  )
}

export default Input
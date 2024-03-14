import React from 'react'
import Button from '../components/Buttons'

function Advertise() {
  return (
    <section className={`max-container bg-darkViolet max-md:bg-advertise-mobile lg:bg-advertise-desktop bg-no-repeat bg-center bg-cover py-20 px-4 flex flex-col items-center gap-4 lg:gap-8`}>
        <h1 className='text-white text-2xl text-center lg:text-4xl font-bold'>Boost your links today</h1>
        <Button label={"Get Started"}/>
    </section>
  )
}

export default Advertise
import React from 'react'
import Button from '../components/Buttons'

function Advertise() {
  return (
    <section className='max-container bg-darkViolet bg-bg-advertise bg-no-repeat bg-center bg-cover py-20 px-4 flex flex-col items-center gap-4'>
        <h1 className='text-white text-2xl font-bold'>Boost your links today</h1>
        <Button label={"Get Started"}/>
    </section>
  )
}

export default Advertise
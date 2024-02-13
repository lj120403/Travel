import React from 'react'

const Hero = () => {
  return (
    <div className = 'w-full h-screen'>
      <img className = 'top-0 left-0 h-screen object-cover' src="https://i0.wp.com/theluxurytravelexpert.com/wp-content/uploads/2018/07/HEADER2-1.jpg?fit=1300%2C731&ssl=1" alt = '/' />
        <div className='bg-black/30 absolute top-0 left-0 w-full h-screen'/>
        <div className='absolute top-0 w-full h-screen flex flex-col justify-center text-white'>
            <div className='md:left-[10%] max-w-[700px] absolute p-4'>
                <p>All Inclusive</p>
                <h1 className='font-bold text-5xl md:text-7xl drop-shadow-2xl'>Private Beaches & Getaways</h1>
                <p className = 'max-w-[600px] drop-shadow-2xl py-2 text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate quaerat tempore quibusdam maxime hic sapiente minima dolore incidunt quas vel?</p>
            <button className='bg-white text-black'>Reserve Now</button>
            </div>
        </div>
    </div>
  )
}

export default Hero

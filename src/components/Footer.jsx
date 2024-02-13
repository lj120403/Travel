import React from 'react'

const Footer = () => {
  return (
    <div>
        <div className='bg-black w-full h-full py-6'>
            <h1 className='text-white font-bold text-2xl z-20'>Experiences</h1>
            <div className='grid grid-cols-2 flex flex-col'>
            <ul>
                <li className = 'text-white py-2 px-5'>About Us</li>
                <li className = 'text-white py-2 px-5'>Terms and Conditions</li>
                <li className = 'text-white py-2 px-5'>Privacy Policy</li>
                <li className = 'text-white py-2 px-5'>Legal Issues</li>
                <li className = 'text-white py-2 px-5'>Finance</li>
            </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer

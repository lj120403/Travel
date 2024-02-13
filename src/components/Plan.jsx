import React from 'react'

const Plan = () => {
  return (
    <div className='max-w-[1400px] mx-auto py-16 px-4 grid lg:grid-cols-2 gap-4'>
        {/* Left Side */}
        <div className='grid grid-cols-2 grid-rows-6 h-[80vh]'>
            <img className = 'row-span-3 object-cover w-full h-full p-2' src="https://366e203a.rocketcdn.me/wp-content/uploads/2021/05/Soneva-Fushi.jpg" alt="/" />
            <img className = 'row-span-2 object-cover w-full h-full p-2' src="https://travelpediaonline.com/wp-content/uploads/2023/03/Sugar-Beach-A-Viceroy-Resort-%E2%80%93-St.-Lucia-1024x538.jpg" alt="/" />
            <img className = 'row-span-2 object-cover w-full h-full p-2' src="https://dynamic-media-cdn.tripadvisor.com/media/photo-o/1d/9b/30/f3/melati-beach-resort-spa.jpg?w=700&h=-1&s=1" alt="/" />
            <img className = 'row-span-3 object-cover w-full h-full p-2' src="https://cdn.audleytravel.com/1343/959/79/1341721-mahekal-beach-resort-mexico.jpg" alt="/" />
            <img className = 'row-span-2 object-cover w-full h-full p-2' src="https://cdn.audleytravel.com/1343/959/79/1341721-mahekal-beach-resort-mexico.jpg" alt="/" />
        </div>
        {/* Right Side */}
        <div className='flex flex-col h-full justify-center'>
            <h3 className='text-5xl md:text-6xl font-bold'>Plan Your Next Trip</h3>
            <p className='text-2xl py-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, neque.</p>
            <p className='pb-6'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dolorum atque similique illo iure et, ipsum assumenda distinctio ab itaque, debitis in perferendis, fugiat facere enim eveniet hic accusantium. Cum.</p>
        <div>
            <button className='border-black mr-4 hover:shadow-xl'>Learn More</button>
            <button className='bg-black text-white border-black hover:shadow-xl'>Book Your Trip</button>
        </div>
        </div>
    </div>
  )
}

export default Plan

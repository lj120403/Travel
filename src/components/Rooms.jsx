import React from 'react'

const Rooms = () => {
  return (
    <div className='max-w-[1400px] h-[500px] bg-blue-100 mx-auto my-20 pt-16 lg:mb-[20%] md:mb-[35%] px-4 lg:grid-cols-3 gap-4'>
      <div className='lg:top-20 relative lg:col-span-1 col-span-2'>
        <h3 className='text-2xl font-bold'>Fine Interior Rooms</h3>
        <p className='pt-4'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nesciunt impedit natus porro nemo harum ipsum.</p>
      </div>

      <div className='grid grid-cols-2 col-span-2 gap-2'>
        <img
        className='object-cover w-full h-full'
        src="https://dq5r178u4t83b.cloudfront.net/wp-content/uploads/sites/27/2023/07/11061357/Luxury-Room-2.jpg" 
        alt="/" />
        <img 
        className='object-cover w-full h-full'
        src="https://sthotelsmalta.com/wp-content/uploads/2022/06/modern-luxury-bedroom-suite-and-bathroom-with-working-table-scaled.jpg" 
        alt="/" />
        <img 
        className='object-cover w-full h-full'
        src="https://www.mydomaine.com/thmb/Q8DMDt_CTfdaII3paIXt15piprE=/1278x0/filters:no_upscale():strip_icc()/ashleymontgomerydesign-e6d79f1eba034603a3e110a0f2af330c.png" 
        alt="/" />


      </div>
    </div>
  )
}

export default Rooms

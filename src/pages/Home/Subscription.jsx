import React from 'react'

const Subscription = () => {
  return (
    <div className='bg-white py-16 rounded-t-md'>

        <div className='max-w-screen-xl mx-auto px-6 lg:px-8 mb-20'>
            <div className='flex flex-col md:flex-row justify-between items-center gap-20'>
                <div className='md-w-1/2'>
                    <h3 className='text-3xl font-bold tracking-tight text-secondary sm:text-4xl'>Subscribe to our newsletter.</h3>
                    <p className='mt-4 text-lg leading-8'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. nostrum  <br /> libero delectus.</p>
                </div>
                <div className='sm:w-1/2 mt-6 flex flex-col sm:flex-row gap-4'>
                <label htmlFor="email-address" className='sr-only'>
                    Email
                </label>
                <input type="text" placeholder='email' className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none' />
                <button className=' px-0 bg-btnColor text-white w-full transition erase-in duration-200 text-base font-semibold border-[#9c702a] focus:outline-nome rounded-lg'>Subscribe</button>
                </div>
            </div>
        </div>
        <hr />
    </div>
  )
}

export default Subscription
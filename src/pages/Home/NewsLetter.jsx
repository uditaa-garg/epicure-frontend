import React from 'react'

const NewsLetter = () => {
  return (
    <div className='w-full md:w-2/3 mx-auto flex flex-col items-center p-10'>
        <h3 className='text-secondary font-semibold text-center text-4xl'>Sign Up for my weekly newsletter!</h3>
        <p className='mt-6 text-gray-600 text-lg text-center leading-normal font-light'>Weekly emails with my latest reciepes, cooking tips and tricks</p>

        <div className='mt-6 flex flex-col md:flex-row items-center justify-center w-full md:px-8 gap-4'>
            <input type="text" placeholder='name' className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none' />
            <input type="text" placeholder='email' className='flex flex-grow px-4 py-4 rounded text-gray-400 outline-none' />
            <button className='py-4 px-8  bg-btnColor text-white w-full transition erase-in duration-200 text-base font-semibold border-[#9c702a] focus:outline-nome rounded-lg'>Get Started</button>
        </div>
        </div>
  )
}

export default NewsLetter
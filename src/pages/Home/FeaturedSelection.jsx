import React from 'react'
import FeaturedImg from "../../assets/featured.webp"

const FeaturedSelection = () => {
  return (
    <div className='overflow-hidden flex md:flex-row flex-col justify-between items-center sm:my-20 my-4 md:gap-20 gap-12 px-5 lg:px-10 translate-y-6'>
        <div className='relative'>
            <div className='absolute top-4 left-5 bg-white text-secondary px-3 py-1 rounded-md uppercase tracking-wider'>Featured Reciepe</div>
                <img src={FeaturedImg} alt="featured image" className='resize rounded-md translate-y-6 '/>
            

        </div>
        <div className='text-start sm:w-1/2'>
        <h2 className='text-3xl font-semibold text-secondary sm-text-5xl sm:leading-relaxed '>Pineapple + Smoked Jackfruit Pizza</h2>
        <p className='text-xl mt-4 text-[#5c5c5c]'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nostrum ea mollitia vero nulla, officia nesciunt provident illum aperiam, 
          ab veniam, minima maxime laudantium inventore enim ipsa sequi nihil.</p>
         <div className='lg:mt-0 lg:flex-shrink-0'>
          <div className='mt-12 inline-flex'>
            <button className='py-4 px-8 hover:bg-btnColor text-secondary hover:text-white w-full transition erase-in duration-200 text-base font-semibold border-[#9c702a] focus:outline-nome rounded-lg'>View Reciepe</button>
          </div>
          </div> 
    </div>
    </div>
  )
}

export default FeaturedSelection 
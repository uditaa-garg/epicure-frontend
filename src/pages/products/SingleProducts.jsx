import React from 'react'
import { useLoaderData } from 'react-router-dom';

const SingleProducts = () => {
    const item = useLoaderData();

    const extractNumber = (timeString) => {
        if (!timeString) return 0; // Return 0 if the timeString is undefined or null
        let timeArray = timeString.split(' ');
        return parseInt(timeArray[0]) || 0; // Return 0 if parseInt fails
    };

    //console.log(item)
    let prepTime = extractNumber(item?.more.prep_time);
    let cookTime = extractNumber(item?.more?.cook_time);

    const totalTime = prepTime + cookTime;
  return (
    <section className='min-h-dvh md:flex justify-center items-center md:bg-eggshell'>
        <article px-6 py-6>
            <div className='bg-white md:my-[5rem] md:py-8 pb-8 md:rounded-xl'>
                <picture>
                    <img src={item.thumbnail_image} alt="thumbnail image" className='md:max-w-[90%] w-full md:h-[540px] md:rounded-xl md:mx-auto' />
                </picture>
                <div className='px-8 '>
                    <h1 className='text-4xl mt-12 text-secondary'>{item.name}</h1>
                    <p className='mt-6'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut repudiandae molestias accusantium quae quia. <br /> Iusto maiores, odit ipsa fuga similique vel blanditiis id neque, qui quod sed inventore? Id, esse.</p>
                    <article className='bg-rose-50 mt-6 p-5 rounded-xl'>
                      <h2 className='text-xl font-semibold ml-2'>Preparation time</h2>  
                      <ul className='list-disc mt-3 ml-8 text-lg marker:text-orange-400'>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Total: </span><span>40 minutes</span>
                            </p>
                        </li>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Preparation: </span><span>{prepTime || 15}minutes</span>
                            </p>
                        </li>
                        <li className='pl-3 mt-3'>
                            <p>
                                <span>Cooking: </span><span>{cookTime || 25}minutes</span>
                            </p>
                        </li>
                      </ul>

                    </article>

                    <div className='mt-5'>
                        <h3 className='text-xl font-semibold ml-2'>Instructions</h3>
                       
                    </div>
                    
                </div>
                <h5 className='px-10 py-10'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus suscipit, <br /> accusantium commodi eius sed voluptatum eum iure officia aut modi consequuntur <br /> rerum iusto dolore placeat provident nihil quod, sapiente voluptas? Magni, consequatur. Quod, blanditiis quisquam. <br /> Doloribus consequuntur consectetur aliquam totam ut soluta odit beatae fugit eos non!</h5>
                
                
                <h5 className='px-10 '>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatibus suscipit, <br /> accusantium commodi eius sed voluptatum eum iure officia aut modi consequuntur <br /> rerum iusto dolore placeat provident nihil quod, sapiente voluptas? Magni, consequatur. Quod, blanditiis quisquam. <br /> Doloribus consequuntur consectetur aliquam totam ut soluta odit beatae fugit eos non!</h5>
            </div>
            
        </article>
    </section>
  )
}

export default SingleProducts
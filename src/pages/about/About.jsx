import React from 'react'

const About = () => {
  return (
   <section className='px-6 lg:px-12 py-20'>
    <h1 className='text-center text-3xl pt-10 pb-4 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
     About
    </h1>
    <p className='text-center sm:w-1/2 mx-auto mb-20'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet ea praesentium fugit cumque error? Dolore nisi possimus a earum obcaecati vel necessitatibus placeat facere unde dolores. Minima earum quas quaerat eius obcaecati magnam commodi suscipit quod. Repudiandae consequatur corrupti iste sapiente assumenda ipsa odio voluptate eaque? Voluptatum aliquam veritatis distinctio.</p>

    <article
  className="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
>
  <div
    className="absolute inset-0 bg-white/75 sm:bg-transparent sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
  ></div>

  <div
    className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
  >
    <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
      <h1 className="text-3xl font-extrabold sm:text-5xl">
        Creating new Memories

        <strong className="block font-extrabold text-orange-300"> and Recipes. </strong>
      </h1>

      <p className="mt-4 max-w-lg sm:text-xl/relaxed text-orange-100">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nesciunt illo tenetur fuga ducimus
        numquam ea!
      </p>

      <div className="mt-8 flex flex-wrap gap-4 text-center">
        <a
          href="#"
          className="block w-full rounded bg-orange-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-rose-700 focus:outline-none focus:ring active:bg-rose-500 sm:w-auto"
        >
          Get Started
        </a>

        <a
          href="#"
          className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-orange-600 shadow hover:text-rose-700 focus:outline-none focus:ring active:text-rose-500 sm:w-auto"
        >
          Learn More
        </a>
      </div>
    </div>
  </div>
</article>
   </section>

  )
}

export default About
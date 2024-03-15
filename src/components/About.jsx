import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen  bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
            <div className='sm:text-right pb-8 pl-4'> 
                <p className='text-4xl font-bold inline border-b-4 border-red-600'>About</p>
            </div>
            <div> </div>
            </div>
            <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Rishabh, nice too meet you. Please take a look around </p>
                </div>
                <div>
                    <p>
                    I'm a software developer driven by a passion for building intuitive and efficient solutions.
                     With a focus on clean code and user-centric design. Explore my portfolio 
                    to see how I bring creativity, innovation, and technical expertise to every project
                    </p>
                </div>
           </div>
        </div>
      
    </div>
  )
}

export default About

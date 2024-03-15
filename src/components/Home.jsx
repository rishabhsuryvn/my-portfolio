import React from 'react'


const Home = () => {
  return (
    <div name="home" className='w-full h-screen bg-[#0a192f]'>
       <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
        <p className='text-red-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>
          Rishabh Suryavanshi
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold text-[#8892b0]'>
          I'm a Software Developer.
        </h2>
        <p className='text-[#8892b0] py-4 max-w-[700px]'>
        I'm a passionate software developer dedicated to crafting innovative solutions that bridge the 
        gap between complex problems and elegant, user-friendly experiences. 
        </p>
        <div>
        <a href="src/assets/Rishabh_Resune.pdf" download="Rishabh's Resume" target='_blank'>
          <button className='text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-red-400 hover:border-red-400'>Download Resume 
         </button>
         </a>
           </div>

      </div>
    </div>
  )
}

export default Home
